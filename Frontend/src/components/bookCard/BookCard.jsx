import React from 'react';

const BookCard = ({book}) => {
    const {category,description,image,name,topic,price }=book;
    return (
        <div className='my-6 '>
            <div className="card max-w-96 bg-base-100 shadow-xl hover:translate-y-4 duration-500 cursor-pointer dark:bg-slate-900 dark:text-slate-50">
                <figure>
                    <img src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold ">
                    {name.slice(0,20)}
                        <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p>{description.slice(0,50)}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{topic}</div> 
                        <div className="badge badge-outline">{price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;