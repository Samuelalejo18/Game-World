/* eslint-disable jsx-a11y/alt-text */
import '../styles/carrusel.scss';

function Carrusel() {
  return (
    <div className="box js-carusel">
      <div>
        <div className="item" data-name="Nintendo">
          <img src="./src/assets/img/shapes/Nintendo.png" />
        </div>
      </div>
      <div>
        <div className="item" data-name="Sony">
          <img src="./src/assets/img/shapes/playstation.jpg" />
        </div>
      </div>
      <div>
        <div className="item" data-name="Xbox">
          <img src="./src/assets/img/shapes/xbox.jpg" />
        </div>
      </div>
      <div>
        <div className="item" data-name="Games">
          <img src="./src/assets/img/shapes/games.jpg" />
        </div>
      </div>
      <div>
        <div className="item" data-name="Controlls">
          <img src="./src/assets/img/shapes/controlls.jpg" />
        </div>
      </div>
    </div>

  );
}

export default Carrusel;
