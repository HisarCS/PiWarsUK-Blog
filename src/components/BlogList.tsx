import BlogListCard from "./BlogListCard";
import Blogs from '../blogs.json';
import '../styles/BlogList.css';
import { useState } from "react";


const generateShortDescription = (description: string) => {
    return description.length > 300 ? description.slice(0, 300) + '...' : description;
}
interface BlogMapType {
    [key: number]: String;
}

const BlogMap: BlogMapType = {
    1: "MeetTheTeam",
    2: "Brainstorming",
    3: "Components",
    4: "Manufacturing",
    5: "Redesign",
    6: "Camera",
    7: "Cover",
    8: "Power",
    9: "Testing"
}

const BlogList = () => {
    return (
        <div className='blog-list'>
            {Blogs.map((blog) => {
                return <BlogListCard title={blog.title} description={generateShortDescription(blog.description)} href={`/blog/` + BlogMap[blog.id]}/>
            })}
        </div>
    );
}



export default BlogList;
