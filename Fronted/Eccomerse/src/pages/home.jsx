/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import Carrusel from '../components/carrusel';
import '../styles/home.css';
function HomePage() {
  return (
    <div>
      <main>
        <header id="header">
          <div className="overlay overlay-lg">
            <img src="./src/assets/img/shapes/square.png" className="shape square" alt="" />
            <img src="./src/assets/img/shapes/circle.png" className="shape circle" alt="" />
            <img src="./src/assets/img/shapes/half-circle.png" className="shape half-circle1" alt="" />
            <img src="./src/assets/img/shapes/half-circle.png" className="shape half-circle2" alt="" />
            <img src="./src/assets/img/shapes/x.png" className="shape xshape" alt="" />
            <img src="./src/assets/img/shapes/wave.png" className="shape wave wave1" alt="" />
            <img src="./src/assets/img/shapes/wave.png" className="shape wave wave2" alt="" />
            <img src="./src/assets/img/shapes/triangle.png" className="shape triangle" alt="" />
            <img src="./src/assets/img/shapes/letters.png" className="letters" alt="" />
            <img src="./src/assets/img/shapes/points1.png" className="points points1" alt="" />
          </div>
          <nav className='black'>
            <div className="container1">
              <div className="logo" />
              <div className="links">
                
                 
                
                 
                  <Link to="/shop">
                 <button className='shop'>Shop 🛍️  ⏩</button>
                  </Link>
                
              </div>
            </div>
          </nav>
          <div className="header-content">
            <div className="container1 grid-2">
              <div className="column-1">
                <h1 className="header-title1">Wame world</h1>
                <p className="text1">
                  Discover gaming nirvana at our console haven. Unleash the gamer in you with the latest consoles,
                  accessories, and an expansive game collection. Visit us today for the ultimate gaming experience!

                </p>
              </div>
            
              <img src="./src/assets/img/shapes/2.png" />
              <div className="column-2 image">
              
              </div>
            </div>
          </div>
        </header>

<Carrusel/>









        <section className="services section" id="services">
          <div className="container1">
            <div className="section-header">
              <h3 className="title1" data-title1="what do we do?">Services</h3>
            </div>
            <div className="cards">
              <div className="card1-wrap">
                <img src="./src/assets/img/shapes/points3.png" className="points points1 points-sq" alt="" />
                <div className="card1" data-card1="UI/UX">
                  <div className="card1-content z-index">
                    <img src="./src/assets/img/shapes/Removal-906.png" className="icon" alt="" />
                    <h3 className="title1-sm">Console fix</h3>
                    <p className="text1">
                      Maintenance and repair of your consoles
                    </p>
                  </div>
                </div>
              </div>
              <div className="card1-wrap">
                <div className="card1" data-card1="Code">
                  <div className="card1-content z-index">
                    <img src="./src/assets/img/shapes/4.png" className="icon" alt="" />
                    <h3 className="title1-sm">Console sale</h3>
                    <p className="text1">
                      We sell the best consoles on the market!!
                    </p>
                  </div>
                </div>
              </div>
              <div className="card1-wrap">
                <img src="./src/assets/img/shapes/points3.png" className="points points2 points-sq" alt="" />
                <div className="card1" data-card1="App">
                  <div className="card1-content z-index">
                    <img src="./src/assets/img/shapes/1.png" className="icon" alt="" />
                    <h3 className="title1-sm">Sale of peripherals</h3>
                    <p className="text1">
                      We sell all types of peripherals for your consoles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog section">
          <div className="container1">
            <div className="section-header">
              <h3 className="title1">Our consoles</h3>
              <p className="text1">
                The most influential companies in the industry
              </p>
            </div>
            <div className="blog-wrapper">
              <div className="blog-wrap">
                <img src="./src/assets/img/shapes/points3.png" alt="" className="points points-sq" />
                <div className="blog-card1">
                  <div className="blog-image">
                    <img src="./src/assets/img/shapes/5.jpeg" alt="" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-info" />
                    <h3 className="title1-sm">Nintendo</h3>
                    <p className="blog-text1">
                      Is known for its focus on innovation and fun in the world of video games. They have iconic franchises
                      like Mario, Zelda, and Pokémon and are famous for their portable consoles like Game Boy and Nintendo
                      Switch.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-wrap">
                <div className="blog-card1">
                  <div className="blog-image">
                    <img src="./src/assets/img/shapes/6.jpeg" alt="" />
                  </div>
                  <div className="blog-content">
                    <h3 className="title1-sm">Sony</h3>
                    <p className="blog-text1">
                      Is a key player in the gaming industry, with the PlayStation brand being synonymous with quality and
                      innovation. They offer a vast library of games and powerful gaming hardware.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-wrap">
                <div className="blog-card1">
                  <div className="blog-image">
                    <img src="./src/assets/img//shapes/Llega nueva actualización a Xbox One _ LevelUp.jpeg" alt="" />
                  </div>
                  <div className="blog-content">
                    <h3 className="title1-sm">Xbox</h3>
                    <p className="blog-text1">
                      Is a Microsoft brand that has become a major player in the video game industry. It's known for its
                      powerful consoles and services, like Xbox Live, providing a wide range of gaming experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hireme" id="hireme">
          <div className="container1">
            <h3 className="title11">What to expect to enter a World game</h3>
            <p className="text1">
              When you enter World Game, you can expect an immersive gaming experience like no other. Our store is a gamer's
              paradise with a wide selection of cutting-edge video games, consoles, and accessories. Our expert staff will
              help you find the perfect game, and our gaming lounges are ideal for trying out the latest releases with
              friends. At World Game, it's not just a store; it's a destination for all gamers, where the world of gaming
              comes to life.
            </p>
            <a href="#" className="btn1">Us</a>
          </div>
        </section>
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
    </div>
  );
}

export default HomePage;
