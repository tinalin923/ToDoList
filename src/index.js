import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import ListPage from './components/Listpage.js';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/list" element={<ListPage />} />
        </Routes>
    </BrowserRouter>
);



