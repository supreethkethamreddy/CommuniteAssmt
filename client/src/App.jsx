import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import FeatureShowcase from './src/components/FeatureShowcase/FeatureShowcase'
import Main from './src/components/Main/Main'
import Navbar from './src/components/Navbar/Navbar'
import CmsPage from './CmsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cms" element={<CmsPage />} />
        <Route path="/" element={
          <>
            <Navbar/>
            <Main/>
            <FeatureShowcase/>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
