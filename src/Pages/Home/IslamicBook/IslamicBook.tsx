import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from '../../shared/BookCard/BookCard';

const IslamicBook = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/islamic_books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='mx-20 my-20'>
            <h3 className="text-3xl text-left pb-12 font-bold"><i>Islamic Books</i></h3>
            <Carousel responsive={responsive}>
                {
                    books.map((book: any) => (
                        <BookCard
                            book={book}
                        />
                    ))
                }
            </Carousel>
        </div>
    );
};

export default IslamicBook;