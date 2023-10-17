import { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../Context/Data.Context";
import CartTotal from "../components/CarContent/CartTotal";
import Prices from "../components/CarContent/Prices";
import CartElements from "../components/CarContent/cartElements";
import '../styles/cart.css';
function CarMarket() {
  const { cart } = useContext(dataContext);
  return cart.length > 0 ? (
    <>

      <nav className="header">
        <Link to='/shop'>
          <a className="btn" href="#">
            <button>⏪Back</button>
          </a>
        </Link>
      </nav >

      <main className="Main">


        <div className="cartContent">
          <div className="contentleft">
            <div className="YourProducts "><p>All your products</p></div>
            <div className="Customer"><p>Customer information :</p></div>
            <div className="CustomerContent">
              <div className="CustomerLeft">
                <p>Name :</p>
                <p>Last Name : </p>
                <p>Phone : </p>
                <p>Send to :</p>
              </div>
              <div className="CustomerRight">
                <p>Samuel Alejandro </p>
                <p>Monsalve Sarmiento  </p>
                <p>3132875673 </p>
                <p>Carrera 68g</p>
              </div>
            </div>

            <div className="ElementsCart">
              <CartElements />
            </div>
          </div>


          <div className="contentRight">
            <div className="Summary">
              <p>Summary of purchase</p>
            </div>
            <div className="SummaryContent">
              <div className="SummaryLeft">
                <p>Your products :</p>
              </div>
              <div className="SummaryRight">
                <Prices />
              </div>
            </div>
            <div className="ShipmentContent">
              <div className="ShipmentLeft">
                <p>Shipment :</p>
              </div>
              <div className="ShipmentRight">
                <p>Free</p>
              </div>
            </div>
            <div className="YouPay">
              <div className="PaytLeft">
                <p>You Pay :</p>
              </div>
              <div className="PayRight">
                <p> <CartTotal /></p>
              </div>
            </div>
            <div className="frame">

              <button className="custom-btn btn-3">
                <span><strong>Pay</strong> </span>
              </button>
            </div>

          </div>
        </div>
      </main>


      <footer className="footer">
        <div className="container1">
          <div className="grid-4">
            <div className="grid-4-col footer-links">
              <h3 className="title1-sm">Links</h3>
              <ul>
                <li>
                  <a href="#services">Services</a>
                </li>
              </ul>
            </div>
            <div className="grid-4-col footer-links">
              <h3 className="title1-sm">Services</h3>
              <ul>
                <li>
                  <a href="#">Console fix</a>
                </li>
                <li>
                  <a href="#">Console sale</a>
                </li>
                <li>
                  <a href="#">Sale of peripherals</a>
                </li>
              </ul>
            </div>
            <div className="grid-4-col footer-newstletter">
              <h3 className="title1-sm">logear</h3>
              <div className="footer-input1-wrap">
                <input type="email" className="footer-input1" placeholder="Email" />
                <a href="#" className="input1-arrow">
                  <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="copyright">
              <p className="text1">
                Copyright©2023 All rights reserved | Made by
                <span>World game</span>
              </p>
            </div>
            <div className="followme-wrap">
              <div className="followme">
                <h3>follow us</h3>
                <span className="footer-line" />
                <div className="social-media">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="back-btn1-wrap">
                <a href="#" className="back-btn1">
                  <i className="fas fa-chevron-up" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  ) : (
    <>
      <nav className="header">

      </nav >
      <main id="CarEmpty">
        <h1 className="CartEmpty">Your cart is empty</h1>
        <Link to='/shop'>
          <a className="btn" href="#">
            <button>⏪Back</button>
          </a>
        </Link>
      </main>

    </>
  )
}










export default CarMarket;
