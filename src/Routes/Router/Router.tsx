import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddBook from "../../Pages/AddBook/AddBook";
import Home from "../../Pages/Home/Home/Home";
import ShowAllBooks from "../../Pages/ShowAllBooks/ShowAllBooks";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addbook',
                element: <AddBook></AddBook>
            }
        ]
    },
    {
        path: '/allbooks',
        element: <ShowAllBooks></ShowAllBooks>
    }
])