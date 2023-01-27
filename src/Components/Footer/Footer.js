import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-container">
      <div className="uper-heading">
        <h3>
          The values that hold us,
          <br /> true and to account{" "}
        </h3>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          {/* <img src={square}/> */}
          <div className="row-heading">
            <h5> Simplicity</h5>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque
                non iusto nihiaS technology
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* <img src={square}/> */}
          <div className="row-heading">
            <h5>Social Good</h5>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque
                non iusto nihi
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* <img src={square}/> */}
          <div className="row-heading">
            <h5> trust</h5>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque
                non iusto nihistomer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="square-template mt-5">
        <div className="squar-heading">
          <div className="top-heading">
            {/* <img>logo</img> */}
            <h3>Ready for a simple future ?</h3>
          </div>
          <div className="bottom-heading">
            <h3>Let's get started!</h3>
          </div>
        </div>
        <div className="square-button">
          <button>Get started</button>
        </div>
      </div>

      {/* footer */}

      <div className="footer">
        <div className="row mt-5">
          <div className="col-md-3 text-center">
            <h4 className="text-start" >Customer</h4>
            
                <a href="#">Buyer</a>
              
                <a href="#">Supplier</a>
              
          </div>
          <div className="col-md-3 text-center">
            <h4 >Company</h4>

            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        
        <div className="col-md-3 text-center">
          <h4 >Further information</h4>

          <ul>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      
      <div className="col-md-3 text-center">
        <h4 >Follow us</h4>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
