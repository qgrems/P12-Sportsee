import './App.css';
import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom"
import { Page } from './Pages/page';
import { HomeId } from './Pages/pageId';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeId />} />
      <Route path="/user/:id" element={<Page></Page>} />
    </Routes>
  );
}



