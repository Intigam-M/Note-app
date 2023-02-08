import React, { useEffect, useState } from 'react'
import NoteList from './NoteList'
import AddNote from './AddNote'
import Navbar from './Navbar'

const NoteApp = () => {

    const [notes, setNotes] = useState([])


    useEffect(() => {

        const data = JSON.parse(localStorage.getItem('notes'))
        if (data) {
            setNotes(data)
        }

    }, [])


    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])




    const newNote = (title, description) => {
        setNotes([ ...notes, { id: notes.length+1, title: title, description: description } ])
    }


    const removeNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }


    return (
        <div className='container'>
            <Navbar notes={notes}/>
            <NoteList notes={notes} removeNote={removeNote}/>
            <AddNote newNote={ newNote } />
        </div>

    )

}

export default NoteApp