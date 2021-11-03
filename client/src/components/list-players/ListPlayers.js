import React from 'react'
import './ListPlayers.css'
import edit from './editing.png'
import hapus from './delete.png'

// argumen props -> menangkap perubahan/value yang terjadi di web/app.js 
const ListPlayers = (props) => (
    <table>
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
        { props.playerData.length > 0 ? ( 
            props.playerData.map((player) => (
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
                    </td>
                </tr>
            ))
        ) 
        // :  props.searchData.length > 0 ?
        //     props.searchData.map((player) => (
        //         <tr key={player.id}>
        //             <td>{player.username}</td>
        //             <td>{player.email}</td>
        //             <td>{player.exp}</td>
        //             <td>{player.lvl}</td>
        //             <td className="button">
        //                 <button 
        //                     className="button-edit" 
        //                     onClick={() => {
        //                         props.onEditPlayer(player)
        //                     }}
        //                 >
        //                     <img className="edit" src={edit} alt="edit" />
        //                 </button>
        //                 <button onClick={() => { if (window.confirm('Are you sure you wish to delete this player?')) props.onDeletePlayer(player.id)}}><img className="delete" src={hapus} alt="delete" /></button>
        //             </td>
        //         </tr>
        //     ))
            : 
            <tr>
                <td colSpan="5">no players</td>
            </tr>
            
        }
        </tbody>
    </table>
)

export default ListPlayers