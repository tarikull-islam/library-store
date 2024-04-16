import React from 'react';
import Slider from "react-slick";
import axios from "axios"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from '../heading/Heading';
import BookCard from '../bookCard/BookCard';
import { useState, useEffect } from 'react';

const FreeBook = () => {
  const [booksData ,setBooksData]=useState([]);
    useEffect(()=>{
      const getBook =async ()=>{
        try {
          const res = await axios.get("http://localhost:8000/book");
            setBooksData(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      getBook();
    },[])
    const filterData = booksData.filter(data => data.category === "free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='max-w-screen-2xl container mx-auto py-10'>
            <Heading />
            <div className="slider-container mr-4 md:mr-6 ">
                <Slider {...settings}>
                    {
                        filterData.map((itam)=> <BookCard key={itam.id} book={itam}/>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default FreeBook;