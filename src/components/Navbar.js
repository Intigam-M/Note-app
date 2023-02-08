import {NotesContext} from '../context/notesContext'
import React, { useContext } from 'react'

const Navbar = () => {
    const{notes}=useContext(NotesContext)
    return (
        <div className='navbar'>
            <h1>NoteApp</h1>
            <p>Currently you have {notes.length} notes</p>
        </div>
    )
}

export default Navbar