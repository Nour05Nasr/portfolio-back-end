import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Projects from './Pages/Projects';
import Categories from './Pages/Categories';
import Pages from './Pages/Pages';
import Profile from './Pages/Profile';
import Inbox from './Pages/Inbox';
import InboxSub from './Pages/InboxSub';
import ProjectEditor from './Pages/ProjectEditor';
import Error404 from './Pages/Error404';

const RoutingApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/InboxSub/:id" element={<InboxSub />} />
        <Route path="/ProjectEditor" element={<ProjectEditor />} />

        <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
    
     );
};
 
export default RoutingApp;