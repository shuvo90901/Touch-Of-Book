import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const BookCard = ({ book }: any) => {
    return (
        <div className="card bg-slate-300 shadow-xl m-2">
            <div className=' lg:h-72'>
                <PhotoProvider>
                    <PhotoView src={book.bookImage}>
                        <figure><img className='w-1/2 mt-5' src={book.bookImage} alt='' /></figure>
                    </PhotoView>
                </PhotoProvider>
                {/* <figure><img className='w-1/2 mt-5' src={book.bookImage} alt='' /></figure> */}
            </div>
            <div className="card-body text-left">
                <i className='text-green-800'>
                    <h2 className="card-title text-2xl">{book.bookName}</h2>
                    <p className='my-2'>Writer : {book.writer}</p>
                </i>
                <div className="card-actions justify-end">
                    <a className='btn  btn-success  font-bold w-full' target='_blank' href={book.bookLink}>Read</a>
                </div>
            </div>
        </div>
    );
};

export default BookCard;