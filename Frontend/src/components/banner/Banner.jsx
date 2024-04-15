import React from 'react';
import bannerPng from "../../assets/Banner.png"

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:py-20 py-6 md:px-20 px-4 flex flex-col flex-col-reverse md:gap-6 md:flex-row'>
                <div className='w-full md:w-1/2 mt-6 md:mt-32 space-y-6'>
                    <div className="md:space-y-12 space-y-4">
                        <h1 className='text-4xl font-extrabold '>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nesciunt ipsam nulla nostrum nisi laborum veritatis, perferendis voluptas expedita maxime quod corrupti possimus ipsa atque vel quia minima? Distinctio, ipsam</p>
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <button className="btn btn-secondary font-extrabold">Get Started</button>
                </div>
                <div className='w-full md:w-1/2 flex'>
                    <img srcSet={bannerPng}  className='w-80 h-80 md:w-full md:h-full md:pt-16 pt-6 mx-auto align-items-center'/>
                </div>
            </div>
        </>
    );
};

export default Banner;