import React from 'react'
import { Table } from 'react-bootstrap'
import hapus from './delete.png'
import edit from './editing.png'


// argumen props -> menangkap perubahan/value yang terjadi di web/app.js 
const ListPlayers = (props) => {
    return (
        <>
            <Table className='table-list'>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Experience</th>
                    <th>Level</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { props.searchData.length === 0 ? ( 
                    <tr>
                        <td colSpan="4">no players</td>
                        <td><button className='text-white' onClick={() => props.setSearching(false)}>&larr; back</button></td>
                    </tr>
                ) 
                :  props.searchData.length > 0 ?
                    props.searchData.map((player) => (
                        <tr key={player.id}>
                            <td>{player.username}</td>
                            <td>{player.email}</td>
                            <td>{player.exp}</td>
                            <td>{player.lvl}</td>
                            <td className="button">
                                <button 
                                    className="button-edit" 
                                    onClick={() => {
                                        props.onEditPlayer(player)
                                    }}
                                >
                                    <img className="edit" src={edit} alt="edit" />
                                </button>
                                <button onClick={() => { if (window.confirm('Are you sure you wish to delete this player?')) props.onDeletePlayer(player.id)}}><img className="delete" src={hapus} alt="delete" /></button>
                                {/* <form onSubmit={(e) => {
                                    e.preventDefault();

                                }}> */}
                                <button className='text-white' onClick={() => props.setSearching(false)}>&larr; back</button>
                                {/* </form> */}
                            </td>
                        </tr>
                    ))
                    : 
                    <tr>
                        <td colSpan="5">no players</td>
                    </tr>
                    
                }
                </tbody>
            </Table>
        </>
    )
}

export default ListPlayers