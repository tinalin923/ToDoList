import React, { useState, useEffect } from 'react';
import HomePage from './components/Homepage.js';
import ChangeButton from './components/Button.js';
import ListPage from './components/Listpage.js';


export default function App() {
    const [isEdit, setIsEdit] = useState(false);
    const [main, setMain] = useState(<HomePage />);

    useEffect(() => {
        if (isEdit) {
            setMain(<ListPage />);
        } else {
            setMain(<HomePage />);
        }
    }, [isEdit]);

    return (
        <>
            <div>{main}</div>
            <ChangeButton
                setIsEdit={setIsEdit}
                isEdit={isEdit} />
        </>
    );
}