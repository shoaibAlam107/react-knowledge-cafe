import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {

    const [blogs , setBlogs]= useState([]);

    useEffect(()=> {

        fetch('./../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;