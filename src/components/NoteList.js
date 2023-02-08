import Note from "./Note"

const NoteList = ({ notes, removeNote }) => {
    return notes.length > 0 ? 
    (
        <div className="note-list">
            <ul>
                {notes.map((note) => (
                    < Note key={note.id} note={note} removeNote={removeNote} />
                ))}
            </ul>
        </div>
    ):
    (
        <div className="empty">No notes to show</div>
    )
}

export default NoteList




