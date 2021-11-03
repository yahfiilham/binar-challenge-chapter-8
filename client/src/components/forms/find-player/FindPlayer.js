import React, { useState } from 'react'
import './FindPlayer.css'

const FindPlayer = (props) => {
    // const playerData = [
    //     { id: 1, username: 'leomessi', email: 'messi@gmail.com', exp: 1000, lvl: 95 },
    //     { id: 2, username: 'cr7', email: 'ronaldo@gmail.com', exp: 1100, lvl: 93 },
    //     { id: 3, username: 'udin', email: 'udin@gmail.com', exp: 100, lvl: 15 },
    // ]
    
    // const [players, setPlayers] = useState(playerData)
    const [search, setSearch] = useState('')
    // const [searchTerm, setSearchTerm] = React.useState("");
    // const [searchResults, setSearchResults] = React.useState([]);
    const searchHandler = (event) => {
        setSearch(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault() // untuk menghentikan behavior defaut tag form (mematikan refresh otomatis ketikan di submit)
        // props.onFindPlayer(search)
        props.onSearchPlayer(search)
        // console.log(search);
        setSearch('')
    }

    return (
        <form className="form-search" onSubmit={handleSubmit}>
            <input 
                type="search" 
                className="search"
                placeholder="search..."
                name={'username'}
                value={search}
                onClick={() => {props.setSearching(false)}}
                onChange={searchHandler}
                // onKerPress untuk menonaktifkan submit data dengan tombol enter
                onKeyPress={e => {
                    if (e.key === 'Enter') e.preventDefault()
                    if (e.key === 'Enter') alert("press 'search' button to get your search results")
                }}
            />
            <input 
            type="submit" 
            className="button-search" 
            value="search" 
            // onClick={() => {
            //     props.onSearchPlayer()
            // }}
            />
            {/* <button className="button-search"><img className="edit" src={search} alt="edit" /></button> */}
        </form>
    )
}

export default FindPlayer