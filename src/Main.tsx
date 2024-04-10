import React from 'react';
import './styles/Main.css';
import "./styles/blogs/Blogs.css"
import BlogList from './components/BlogList';
import { Route, Routes } from 'react-router';
import One from './blogs/One';
import Two from './blogs/Two';
import Three from './blogs/Three';
import Four from './blogs/Four';
import Five from './blogs/Five';
import Six from './blogs/Six';
import Seven from './blogs/Seven';
import Eight from './blogs/Eight';
import Nine from './blogs/Nine';

function Main() {
  return (
    <div className='Main'>
        <Routes>
            <Route path="/" element={<BlogList/>}></Route>
            <Route path="/blog/MeetTheTeam" element={<One/>}></Route>
            <Route path="/blog/Brainstorming" element={<Two/>}></Route>
            <Route path="/blog/Components" element={<Three/>}></Route>
            <Route path="/blog/Manufacturing" element={<Four/>}></Route>
            <Route path="/blog/Redesign" element={<Five/>}></Route>
            <Route path="/blog/Camera" element={<Six/>}></Route>
            <Route path="/blog/Cover" element={<Seven/>}></Route>
            <Route path="/blog/Power" element={<Eight/>}></Route>
            <Route path="/blog/Testing" element={<Nine/>}></Route>
        </Routes>
    </div> 
  );
}

export default Main;
