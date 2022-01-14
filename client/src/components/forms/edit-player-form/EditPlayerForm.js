import React, { useState, useEffect } from 'react'
import '../form.css'

const EditPlayerForm = (props) => {
    const [player, setPlayer] = useState(props.currentPlayerData)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setPlayer({ ...player, [name]: value })
    }

    // using effect hook
    useEffect(() => {
        setPlayer(props.currentPlayerData)
    }, [props])

    return (
        <form
            className='form-edit'
            onSubmit={(event) => {
                event.preventDefault()

                props.onUpdateUser(player.id, player)
                props.setSearching(false)
            }}
        >
            <div class="flex-form">
                <div>
                    <label className='label-edit'>Username</label>
                    <input
                        classname="input input-edit"
                        type="text"
                        name="username"
                        value={player.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="label-edit">Email</label>
                    <input
                        classname="input input-edit"
                        type="email"
                        name="email"
                        value={player.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                <label className="label-edit">Experience</label>
                    <input
                        classname="input input-edit"
                        type="text"
                        name="exp"
                        value={player.exp}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="label-edit">Level</label>
                    <input
                        classname="input input-edit"
                        type="text"
                        name="lvl"
                        value={player.lvl}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button className="button-form">Update player</button>
            <button className="button-form">Cancel</button>
        </form>
    )
}

export default EditPlayerForm