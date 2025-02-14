import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        />
        <Route
          path="details/:id"
          element={
            <MainLayout>
              <Details></Details>
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App