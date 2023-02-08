const Navbar = ({notes}) => {
    return (
        <div className='navbar'>
            <h1>NoteApp</h1>
            <p>Currently you have {notes.length} notes</p>
        </div>
    )
}

export default Navbar