import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';

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
        {/* <Route
          path="/:id"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App