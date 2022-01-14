import React, { useState } from 'react'
import './FindPlayer.css'

const FindPlayer = (props) => {
    
    // const [players, setPlayers] = useState(playerData)
    const [search, setSearch] = useState('')
    const searchHandler = (event) => {
        setSearch(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault() // untuk menghentikan behavior defaut tag form (mematikan refresh otomatis ketikan di submit)
        props.onSearchPlayer(search)
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
            />
            <input 
                type="submit" 
                className="button-search" 
                value="search" 
            />
        </form>
    )
}

export default FindPlayer