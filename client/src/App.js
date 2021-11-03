import React, { useEffect, useState } from 'react'
import './App.css';
import ListPlayers from './components/list-players/ListPlayers'
import AddPlayerForm from './components/forms/add-player-form/AddPlayerForm'
import EditPlayerForm from './components/forms/edit-player-form/EditPlayerForm';
import FindPlayer from './components/forms/find-player/FindPlayer';
import SearchPlayerList from './components/search-player-list/SearchPlayerList'


const App = () => {
  // 1. Menampilkan data default (menggunakan useState method)
  const playerData = [
    { id: 1, username: 'leomessi', email: 'messi@gmail.com', exp: 1000, lvl: 95 },
    { id: 2, username: 'cr7', email: 'ronaldo@gmail.com', exp: 1100, lvl: 93 },
    { id: 3, username: 'udin', email: 'udin@gmail.com', exp: 100, lvl: 15 },
  ]

  const [players, setPlayers] = useState(playerData)

  // const searchData = () => {
  //   console.log('data awal: ', players);
  //   console.log('panjang: ', players.length);
  //   let data = []
  //   console.log('1: ', players.length !== 0);
  //   if (players.length !== 0) {
  //     data = players
  //     // return setPlayers(data)
  //   }
  //   console.log('2', players.length < 3);
  //   if (players.length < 3 ) {
  //     if (players.length !== 1) {
  //       data = playerData
  //     } else {
  //       playerData.push(players)
  //       console.log('data push: ', playerData)
  //       data = playerData
  //     }
  //     // return setPlayers(data)
  //   }
  //   // console.log('data proses: ', data);
  //   return data
  // }

  // 1.1 search data player
  // funtion untuk validasi si input ada ga ada 
  // const noPlayerData = (search) => {
  //   let result = ''
  //   // const result = (players.filter((player) => {
  //   //   if (
  //   //     player.username !== search ||
  //   //     player.email !== search ||
  //   //     player.lvl !== search ||
  //   //     player.exp !== search 
  //   //   ) {
  //   //     return player
  //   //   }
  //   // }))
  //   if (
  //     players.username !== search ||
  //     players.email !== search ||
  //     players.lvl !== search ||
  //     players.exp !== search 
  //   ) {
  //     return result = 'kosong'
  //   }
  //   console.log(result);
  // }
  // console.log(noPlayerData());
  // const [dataSearch, setDataSearch] = useState([])
  // const findPlayer = (search) => {
  //   // console.log('data akhir', searchData());
  //   // let playerTemp = players
  //   let playerFinal = players.filter((el) => {
  //     if (
  //       el.username.toLowerCase().includes(search) || 
  //       el.email.toLowerCase().includes(search) ||
  //       el.exp.toString().includes(search) ||
  //       el.lvl.toString().includes(search)
  //     ) {
  //       console.log(el);
  //       return el;
  //     }
  //   })
  //   // if (search === "") {
  //   //   setPlayers(playerData);
  //   // } else {
  //   //   setPlayers(playerFinal);
  //   // }
  //   setDataSearch(playerFinal)
  //   // console.log(dataSearch);
  // }
  // console.log(dataSearch);
  // const searchTerm = (search) => {
  //   // console.log(search);
  //   let result = ''
  //   result = search
  // }
  // console.log(result);

  // useEffect(() => {
  //   const results = players.filter(player =>
  //     player.username.toLowerCase().includes(searchTerm())
  //   );
  //   setPlayers(results)
  //   console.log(players);
  // }, [App]);

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
        // console.log(el);
        return el;
      }
    })
    setDataSearch(playerFinal)
  }
  console.log(dataSearch);
  
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
  }
  console.log('searching ?', searching);

  return (
    <div className="container">
      <h1>CRUD Data Player - ReactJs</h1>
      <div className="flex-row">
        <div className="list-player">
          <h2>List player</h2>
          {searching ? (
            <div>
              <FindPlayer
                setSearching={setSearching}
                searchData={dataSearch}
                onSearchPlayer={searchPlayer}
              />
              <SearchPlayerList playerData={players} searchData={dataSearch} onEditPlayer={editPlayer} onDeletePlayer={deletePlayer} />
            </div>
          ) : (
            <div>
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
              <h2>Edit user</h2>
              <EditPlayerForm
                setEditing={setEditing}
                currentPlayerData={currentPlayer}
                onUpdateUser={updatePlayer}
              />
            </div>
          ) : (
            <div>
              <h2>Add player</h2>
              <AddPlayerForm onAddPlayer={addPlayer} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
