import {NotesContext} from '../context/notesContext'
import React, { useContext } from 'react'

const Note =({note}) => {
    const{dispatch}=useContext(NotesContext)
    const removeNote = (id) => {
        dispatch({
            type: 'REMOVE_NOTE',
            id
        })
    }

    return( 
        <li onClick={ ()=> removeNote(note.id) } >
            <h1 className="title">{note.title}</h1>
            <p>{note.description}</p>
        </li>
        
        )
}
export default Note