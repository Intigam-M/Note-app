import Note from "./Note"

const NoteList = ({ notes, removeNote }) => {
    return (
        <ul className="note-list">
            {notes.map((note) => (
                < Note key={note.id} note={note} removeNote={removeNote} />
            ))}
        </ul>
    )
}

export default NoteList




