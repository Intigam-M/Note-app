import notesReducer from '../reducers/notesReducer'
import React, { useEffect, useReducer } from 'react'

export const NotesContext = React.createContext();
const NotesContextProvider=(props)=>{
    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('notes'))
        if (data) {
            dispatch({
                type: 'POPULATE_NOTES',
                notes: data
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return(
        <NotesContext.Provider value={{notes, dispatch}}>
            {props.children}
        </NotesContext.Provider >
    )

}

export default NotesContextProvider;