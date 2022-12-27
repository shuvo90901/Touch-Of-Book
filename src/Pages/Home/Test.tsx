import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import book1 from '../../assets/kids story/download (2).jpg'

const Test = () => {
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
    return (
        <div className='mx-10'>
            <Carousel responsive={responsive}>
                <div>
                    <img src={book1} alt="" />
                    <a target='_blank' href="https://drive.google.com/file/d/1kgk2AiknFxX1TQzpKq9pFBhkiVWrjCaI/view?usp=share_link">Read</a>
                </div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>
                <div>Item 7</div>
                <div>Item 8</div>
            </Carousel>
        </div>
    );
};

export default Test;