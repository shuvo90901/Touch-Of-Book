import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../shared/BookCard/BookCard';
import Footer from '../shared/Footer/Footer';

const ShowAllBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)
    return (
        <div>
            <div className="navbar z-50 fixed top-0 py-3 bg-slate-200 justify-between px-20">
                <Link to='/' className="btn btn-ghost normal-case text-2xl text-slate-700 font-bold"><i>Touch Of Book</i></Link>
                <Link className='btn btn-outline btn-warning' to='/'>Go to Home</Link>
            </div>
            <div className='grid grid-cols-3 ml-24 mt-40'>
                {
                    books.map((book: any) => (<BookCard
                        book={book}
                    />))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowAllBooks;