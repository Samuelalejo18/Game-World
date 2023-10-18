import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
function NavBar() {

    const { isAuthenticated, logout, user } = useAuth();
    console.log(user);
    const handleLogout = () => {
        logout();
        
      };
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
                                
                                    <a href="#">WELCOME USER</a>
                             
                            </li>
                        </ul>
                        <a className="btn" href="#">

                        <button onClick={handleLogout}>Logout</button>
                        </a>
                        <p>Welcome user</p>
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

                    <input type="text" className="input-search" placeholder="Type to Search..." />

                </div>


            </header >

        </>
    )
}

export default NavBar;
