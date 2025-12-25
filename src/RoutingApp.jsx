import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Projects from './Pages/Projects';
import ProjectViewer from './Pages/ProjectViewer';
import ProjectEditor from './Pages/ProjectEditor';
import CreateProject from './Pages/CreateProject';
import Categories from './Pages/Categories';
import CategoryViewer from './Pages/CategoryViewer';
import CategoryEditor from './Pages/CategoryEditor';
import CreateCategory from './Pages/CreateCategory';
import Pages from './Pages/Pages';
import PageViewer from './Pages/PageViewer';
import PageEditor from './Pages/PageEditor';
import CreatePage from './Pages/CreatePage';
import Profile from './Pages/Profile';
import Inbox from './Pages/Inbox';
import InboxSub from './Pages/InboxSub';
import Error404 from './Pages/Error404';

const RoutingApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/CategoryViewer/:id" element={<CategoryViewer />} />
        <Route path="/CategoryEditor/:id" element={<CategoryEditor />} />
        <Route path="/CreateCategory" element={<CreateCategory />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ProjectViewer/:id" element={<ProjectViewer />} />
        <Route path="/ProjectEditor/:id" element={<ProjectEditor />} />
        <Route path="/CreateProject" element={<CreateProject />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/PageViewer/:id" element={<PageViewer />} />
        <Route path="/PageEditor/:id" element={<PageEditor />} />
        <Route path="/CreatePage" element={<CreatePage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/InboxSub/:id" element={<InboxSub />} />

        <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
    
     );
};
 
export default RoutingApp;