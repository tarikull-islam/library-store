import React, { useEffect, useState } from 'react';
import BookCard from '../components/bookCard/BookCard';
import { Link } from 'react-router-dom';

const Course = () => {
    const [booksData ,setBooksData]=useState([]);
    useEffect(()=>{
        fetch("bookData.json")
        .then(data=> data.json())
        .then(data => setBooksData(data));
    },[]);
    return (
        <div className='pt-16 max-w-screen-2xl container mx-auto py-10'>
            <div className="text-center capitalize max-w-4xl mx-auto  md:space-y-8">
                <h1 className='text-4xl font-extrabold '>
                     we're delighted to have you here!
                </h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dignissimos earum tenetur perspiciatis omnis accusantium? Quia quibusdam quasi cumque dolorem porro delectus error minus quisquam, perspiciatis cum consectetur maxime dolortis.
                </p>
                <Link to="/">
                    <button className="btn btn-secondary">
                        Back
                    </button>
                </Link>
                
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center">
            {
                booksData.map((itam)=> <BookCard key={itam.id} book={itam}/>)
            }
            </div>
        </div>
    );
};

export default Course;