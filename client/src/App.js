import React, { useState } from 'react';
import './App.css';
import AddPlayerForm from './components/forms/add-player-form/AddPlayerForm';
import EditPlayerForm from './components/forms/edit-player-form/EditPlayerForm';
import FindPlayer from './components/forms/find-player/FindPlayer';
import ListPlayers from './components/list-players/ListPlayers';
import SearchPlayerList from './components/search-player-list/SearchPlayerList';


const App = () => {
  // 1. Menampilkan data default (menggunakan useState method)
  const playerData = [
    { id: 1, username: 'leomessi', email: 'messi@gmail.com', exp: 1000, lvl: 95 },
    { id: 2, username: 'cr7', email: 'ronaldo@gmail.com', exp: 1100, lvl: 93 },
    { id: 3, username: 'udin', email: 'udin@gmail.com', exp: 100, lvl: 15 },
  ]

  const [players, setPlayers] = useState(playerData)

  const [searching, setSearching] = useState(false)
  const [dataSearch, setDataSearch] = useState([])
  const searchPlayer = (search) => {
    setSearching(true)
    let playerTemp = players
    let playerFinal = playerTemp.filter((el) => {
      if (
        el.username.toLowerCase().includes(search) || 
        el.email.toLowerCase().includes(search) ||
        el.exp.toString().includes(search) ||
        el.lvl.toString().includes(search)
      ) {
        return el;
      }
    })
    setDataSearch(playerFinal)
  }
  
  // 2. menambah data player baru
  const addPlayer = (player) => {
    player.id = players.length + 1
    setPlayers([...players, player])
  }

  // 3. update/edit data -> dengan bantuan useEffect method 
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, username: '', email: '', exp: '', lvl: '' }
  const [currentPlayer, setCurrentPlayer] = useState(initialFormState) // untuk menampilkan data siapa yang sedang diedit

  // function untuk menampung data yang akan/sedang di edit
  const editPlayer = (player) => {
    setEditing(true)
    setCurrentPlayer({ id: player.id, username: player.username, email: player.email, exp: player.exp, lvl: player.lvl })
  }

  // proses edit data -> update
  const updatePlayer = (id, updatedPlayer) => {
    setEditing(false)
  
    setPlayers(players.map((player) => (player.id === id ? updatedPlayer : player)))
  }

  // 4. hapus data player -> dengan id
  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id))
    setSearching(false)
  }

  return (
    <div className="container">
      <h1>CRUD Data Player - ReactJs</h1>
      <div className="flex-row">
        <div className="list-player">
          {searching ? (
            <div>
              <h2 className='h-list'>Detail Player</h2>
              <FindPlayer
                setSearching={setSearching}
                searchData={dataSearch}
                onSearchPlayer={searchPlayer}
              />
              <SearchPlayerList playerData={players} searchData={dataSearch} onEditPlayer={editPlayer} onDeletePlayer={deletePlayer} setSearching={setSearching} />
            </div>
          ) : (
            <div>
              <h2 className='h-list'>List player</h2>
              <FindPlayer
                setSearching={setSearching}
                searchData={dataSearch}
                onSearchPlayer={searchPlayer}
              />
              {/* lempar data players ke komponen listPlayer */}
              <ListPlayers playerData={players} onEditPlayer={editPlayer} onDeletePlayer={deletePlayer} />
            </div>
          )}
        </div>
        <div className="add-player">
          {editing ? (
            <div>
              <h2 className='h-edit'>Edit user</h2>
              <EditPlayerForm
                setEditing={setEditing}
                currentPlayerData={currentPlayer}
                onUpdateUser={updatePlayer}
                setSearching={setSearching}
              />
            </div>
          ) : (
            <div>
              <h2 className='h-add'>Add player</h2>
              <AddPlayerForm onAddPlayer={addPlayer} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
