import React, { useState } from 'react';
import HomePage from './components/Homepage.js';
import ChangeButton from './components/Button.js';
import ListPage from './components/Listpage.js';


export default function App() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
			{isEdit ? <ListPage /> : <HomePage /> }
			<ChangeButton
				setIsEdit={setIsEdit}
				isEdit={isEdit} />
    </>
  );
}