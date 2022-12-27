import React from 'react';
import './Home.css'
import img from '../../../assets/Screenshot 2022-12-17 225335.png'
import Test from '../Test';
import KidsStory from '../kidsStory/kidsStory';
import PoemBooks from '../../PoemBooks/PoemBooks';
import AllBooks from '../AllBooks/AllBooks';
import IslamicBook from '../IslamicBook/IslamicBook';

const Home = () => {

    return (
        <div className='lg:mt-0 mt-16'>
            <div className=''>
                <img className='w-full  lg:min-h-screen' src={img} alt="" />
                <div className='absolute inset-1/4'>
                    <p className='lg:text-5xl md:text-3xl text-xl lg:pt-5 text-slate-800 font-bold'><i>A room without books is like a body without a soul.</i></p>
                    <br />
                    <p className='text-slate-500  lg:text-3xl md:text-xl  text-right'>---  Marcus Tullius Cicero</p>
                </div>
            </div>
            <div id='allBooks'>
                <AllBooks></AllBooks>
            </div>
            <div id='kidsStory'>
                <KidsStory></KidsStory>
            </div>
            <div id='poemBooks'>
                <PoemBooks></PoemBooks>
            </div>
            <div id='islamicBooks'>
                <IslamicBook></IslamicBook>
            </div>
        </div>
    );
};

export default Home;