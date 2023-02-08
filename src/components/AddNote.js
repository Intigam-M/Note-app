import React, { useContext, useState } from 'react'
import {NotesContext} from '../context/notesContext'

const AddNote = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const{dispatch, notes}=useContext(NotesContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            id: notes.length+1, title: title, description: description
        })
        setTitle('')
        setDescription('')
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" />
            <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" />
            <input type="submit" value='Add note' />
        </form>
    )
}

export default AddNote