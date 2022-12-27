import React from 'react';
import { Link } from 'react-router-dom';
import ToggleDarkLight from '../To/ToggleDarkLight';

const Navbar = () => {
    return (
        <header className="navbar z-50 fixed top-0 py-3 bg-slate-800 px-8 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><a href='#allBooks'>All Books</a></li>
                        <li><a href='#kidsStory'>Kid's Story</a></li>
                        <li><a href='#poemBooks'>Poem Books</a></li>
                        <li><Link to='/addbook'><a>Add</a></Link></li>
                        <li><ToggleDarkLight></ToggleDarkLight></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl text-slate-700 font-bold"><i>Touch Of Book</i></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='#allBooks'>All Books</a></li>
                    <li><a href='#kidsStory'>Kid's Story</a></li>
                    <li><a href='#poemBooks'>Poem Books</a></li>
                    <li><Link to='/addbook'><a>Add</a></Link></li>
                    <li><ToggleDarkLight></ToggleDarkLight></li>
                </ul>
            </div>
            <div className="navbar-end">

                <a className="btn">Get started</a>
            </div>
        </header>
    );
};

export default Navbar;