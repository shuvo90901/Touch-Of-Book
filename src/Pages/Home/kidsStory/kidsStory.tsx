import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from '../../shared/BookCard/BookCard';

const KidsStory = () => {
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
        fetch('http://localhost:5000/kids_story')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)
    return (
        <div className='mx-20 my-20'>
            <div>
                <h3 className="text-3xl text-left pb-12 font-bold"><i>Kid's Story</i></h3>
            </div>
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

export default KidsStory;