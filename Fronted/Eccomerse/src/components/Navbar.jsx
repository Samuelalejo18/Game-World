/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import data from "../js/data";
function NavBar({ setProducts, products }) {

    const { isAuthenticated, logout, user } = useAuth();

    const handleLogout = () => {
        logout();

    };

    const [input, setInput] = useState(false);

    const handleInput = (e) => {
        console.log(e.target.value);

        // setInput(e.target.value) 
        const foundProduct = products.filter(product => product.name.includes(e.target.value));
        console.log(foundProduct);
        if (products.lenght === 0) {
            setProducts(data)
        } else {
            setProducts(foundProduct);
        }

    }

    return (
        <>

            <header className="header">

                <div className="logo">

                    <div className="Market">
                        <Link to='/CarMarket'>
                            <button id="car">   🛒</button>
                        </Link>
                    </div>


                </div>
                <nav>
                    <ul className="nav-links">

                        <li>
                            <Link to='/'>
                                <a href="#">About</a>
                            </Link>
                        </li>
                    </ul>

                </nav>
                {isAuthenticated ? (
                    <>
                        <ul className="nav-links">

                            <li>

                                <a href="#">Welcome <span id="userName">{user.username}</span></a>

                            </li>
                        </ul>
                        <a className="btn" href="#">

                            <button onClick={handleLogout}>Logout</button>
                        </a>
                     
                    </>


                ) : (
                    <>
                        <a className="btn" href="#">
                            <Link to='/register'>
                                <button>Register</button>
                            </Link>
                        </a>
                        <a className="btn" href="#">
                            <Link to='/login'>
                                <button>Login</button>
                            </Link>
                        </a>
                    </>
                )}

                <div className="search-box">

                    <button className="btn-search">
                        <i className="fas fa-search" />
                    </button>

                    <input onChange={handleInput} type="text" className="input-search" placeholder="Type to Search..." />

                </div>


            </header >

        </>
    )
}

export default NavBar;
