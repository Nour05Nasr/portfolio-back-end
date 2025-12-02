import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Error404 from './Pages/Error404';

const RoutingApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
    
     );
};
 
export default RoutingApp;