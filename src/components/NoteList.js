import React, { useState } from 'react'

const NoteList = () => {

    const [notes, setNotes] = useState([

        { id: 1, title: 'This is my first note! 1' },
        { id: 2, title: 'This is my first note! 2' },
        { id: 3, title: 'This is my first note! 3' },

    ])


    const addNote = () => {
        setNotes([ ...notes, { id: 4, title: 'This is my first note! 4' } ])
    }


    return (
        <>
            <ul className="note-list">
                {notes.map((note) => (
                    <li key={note.id}>{note.title}</li>
                ))}
            </ul>
            <button onClick={addNote}>Add note</button>
        </>

    )

}

export default NoteList