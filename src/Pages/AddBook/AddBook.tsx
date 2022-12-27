import React from 'react';
import { useForm } from 'react-hook-form';
import './AddBook.css'

const AddBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddBook = (data: any) => {
        const bookName = data.bookName;
        const category = data.category;
        const writer = data.writer;
        const bookLink = data.bookLink;
        const bookImage = data.bookImage;
        const book = {
            bookName, category, writer, bookLink, bookImage
        }
        console.log(book)
        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                alert('succesfull')
                console.log(data)
            })
    }
    return (
        <div>
            <div className=" min-h-screen bg-base-200 py-20 background">
                <div className="hero-content ">

                    <form onSubmit={handleSubmit(handleAddBook)} className="card flex-shrink-0 w-3/4 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Book Name</span>
                                </label>
                                <input type="text"  {...register("bookName", {
                                    required: 'Book Name is required'
                                })} placeholder="Enter Book Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Book Category</span>
                                </label>
                                <select {...register("category", {
                                    required: 'Category is required'
                                })} className="select w-full  input-bordered">
                                    <option disabled selected>Pick your favorite Simpson</option>
                                    <option>kid's_story</option>
                                    <option>horror_book</option>
                                    <option>Poem_book</option>
                                    <option>Islamic_book</option>
                                    <option>Maggie</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Writer of Book</span>
                                </label>
                                <input type="text" {...register("writer", {
                                    required: 'Writer Name is required'
                                })} placeholder="Enter Writer Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Book Drive Link</span>
                                </label>
                                <input type="text" {...register("bookLink", {
                                    required: 'Book Name is required'
                                })} placeholder="Enter the Book Drive Link" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Book Image</span>
                                </label>
                                <input type="text" {...register("bookImage", {
                                    required: 'Book Image is required'
                                })} placeholder="Enter the Book Image Link" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;