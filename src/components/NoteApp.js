import NoteList from './NoteList'
import AddNote from './AddNote'
import Navbar from './Navbar'
import NotesContextProvider from '../context/notesContext'

const NoteApp = () => {
    return (
        <NotesContextProvider>
            <div className='container'>
                <Navbar />
                <NoteList />
                <AddNote />
            </div>
        </NotesContextProvider>
    )
}

export default NoteApp