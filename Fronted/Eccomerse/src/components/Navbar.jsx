import { Link } from "react-router-dom";
function NavBar() {


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

                <a className="btn" href="#">
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </a>
                <div className="search-box">

                    <button className="btn-search">
                        <i className="fas fa-search" />
                    </button>

                    <input type="text" className="input-search" placeholder="Type to Search..." />

                </div>
                <a className="btn" href="#">
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </a>

            </header >

        </>
    )
}

export default NavBar;
