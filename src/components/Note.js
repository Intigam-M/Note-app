const Note =({note, removeNote}) => {
    return( <li onClick={ ()=> removeNote(note.id) } >{note.title}</li>)
        
}
export default Note