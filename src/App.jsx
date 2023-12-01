import React from 'react'
import { Box } from '@chakra-ui/react';
import Login from './Login';
import Portfolio from './Portfolio';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';




const App = () => {


  return (
   <Box h="100vh" w="100vw" >
   <Router>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>
   </Router>
   </Box>
  )
}

export default App