/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pay.css';

class Pay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardIsFlipped: false,
      hasError: false,
    };
  }

  handleCardNumberChange = (e) => {
    const cardNumberInput = e.target;
    const cardNumberElement = document.querySelector('.cardNumber');
    const errorMessageElement = document.querySelector('.errorMessage');

    if (!/[^$,\\.\d]/.test(cardNumberInput.value)) {
      if (
        cardNumberInput.value.length === 4
                || cardNumberInput.value.length === 9
                || cardNumberInput.value.length === 14
      ) {
        cardNumberInput.value += '.';
        cardNumberElement.innerHTML = cardNumberInput.value || '####-####-####-####';
        errorMessageElement.style.display = 'none';
        this.setState({ hasError: false });
      } else {
        errorMessageElement.style.display = 'none';
        cardNumberElement.innerHTML = cardNumberInput.value || '####-####-####-####';
        this.setState({ hasError: false });
      }
    } else {
      cardNumberElement.innerHTML = 'number please...';
      this.setState({ hasError: true });
      errorMessageElement.style.display = 'block';
      cardNumberInput.value = null;
    }
  };

  handleNameChange = (e) => {
    const cardHolderInput = e.target;
    const nameElement = document.querySelector('.name');
    const input = cardHolderInput.value.toUpperCase();

    if (cardHolderInput.value.length === 18) {
      nameElement.innerHTML = `${input}..`;
    } else {
      nameElement.innerHTML = input || 'Your Name';
    }
  };

  handleCVVChange = (e) => {
    const cvvInput = e.target;
    const cvvContainer = document.querySelector('.cvvContainer');
    cvvContainer.innerHTML = cvvInput.value;
  };

  handleMonthChange = (e) => {
    const monthValue = e.target.value;
    document.querySelector('.monthValue').innerHTML = monthValue;
  };

  handleYearChange = (e) => {
    const yearValue = e.target.value;
    document.querySelector('.yearValue').innerHTML = yearValue;
  };

  toggleCardDisplay = (e) => {
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');

    if (e.target !== this.cvvInput) {
      front.style.display = 'flex';
      back.style.display = 'none';
    }
  };

  handleCVVClick = () => {
    const back = document.querySelector('.back');
    const front = document.querySelector('.front');

    back.style.display = 'flex';
    front.style.display = 'none';
  };

  render() {
    return (
      <body className="Body">

        <div className="container7">
          <div className="card7">
            <div className="front">
              <div className="row">
                <i className="fab fa-hooli fa-4x stamp" />
                <i className="fab fa-cc-stripe fa-4x visa" />
              </div>
              <div className="cardNumberContainer">
                <div className="cardNumberWrapper">
                  <h1 className={`cardNumber ${this.state.hasError ? 'error' : ''}`} id="h1logo">####-####-####-####</h1>
                </div>
              </div>
              <div className="row">
                <div className="cardHolder">
                  <div className="cardHolderWrapper">
                    <p className="holder">Card Holder</p>
                    <h3 className="name">Your Name Here</h3>
                  </div>
                </div>
                <div className="expirationDate">
                  <div className="expirationDateWrapper">
                    <p className="expires">Expires</p>
                    <div className="date">
                      <p className="monthValue">05</p>
                      <p className="divider">/</p>
                      <p className="yearValue">98</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="backTopRow" />
              <div className="backMiddleRow">
                <p>CVV</p>
                <div className="whiteRow">
                  <p className="cvvContainer" />
                </div>
              </div>
              <div className="backBottomRow">
                <i className="fab fa-cc-stripe fa-3x" />
              </div>
            </div>
          </div>
          <div className="form" onClick={this.toggleCardDisplay}>
            <div className="formContent">
              <label className="labelClasname" htmlFor="">Card Number</label>
              <input

                type="text"
                className="cardNumberInput input inputform"
                maxLength="19"
                onChange={this.handleCardNumberChange}
              />
              <p className="errorMessage">credit card number must be a number...</p>
              <label className="labelClasname" htmlFor="">Card Holder</label>
              <input
                type="text"
                className="cardHolderInput input inputform"
                maxLength="18"
                onChange={this.handleNameChange}
              />
              <label className="labelClasname" htmlFor="">Expiration Date</label>
              <div className="expirationDateDetails">
                <div className="month">
                  <select name="" id="" className="monthSelect input" onChange={this.handleMonthChange}>
                    <option value="" disabled selected>
                      Month
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="year">
                  <select name="" id="" className="yearSelect input" onChange={this.handleYearChange}>
                    <option value="" disabled selected>
                      Year
                    </option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select>
                </div>
                <div className="cvv">
                  <div className="cvvWrapper">
                    <input
                      className="cvvInput input inputform"
                      onInput={(e) => {
                        if (e.target.value.length > e.target.maxLength) {
                          e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }
                        this.handleCVVChange(e);
                      }}
                      type="number"
                      maxLength="3"
                      placeholder="CCV"
                    />
                  </div>
                </div>
              </div>
              <Link to="/SuccessfulPayment">
                <button type="button" className="Submit">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Pay;
