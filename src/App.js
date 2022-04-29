import React, { useState, useEffect } from 'react';
import HomePage from './components/Homepage.js';
import ChangeButton from './components/Button.js';
import ListPage from './components/Listpage.js';


export default function App() {
    const home = <HomePage />;
    const list = <ListPage />;
    const [isEdit, setIsEdit] = useState(false);
    const [page, setPage] = useState(home);
    
    useEffect(() => {
        if (isEdit) {
            setPage(list);
        } else {
            setPage(home);
        }
    }, [isEdit]);

    return (
        <>
            <div>{page}</div>
            <ChangeButton
                setIsEdit={setIsEdit}
                isEdit={isEdit} />
        </>
    );
}