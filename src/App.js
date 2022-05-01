import React from 'react';
import { BrowserRouter,	Routes,	Route } from "react-router-dom";
import HomePage from './components/Homepage.js';
import ListPage from './components/Listpage.js';

export default function App() {
	return (
		<>	
		  <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/list" element={<ListPage />} />
        </Routes>
    	</BrowserRouter>
		</>
	)
};
