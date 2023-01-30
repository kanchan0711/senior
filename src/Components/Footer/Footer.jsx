import React from "react";
import "./Footer.css";
import heartlogo from "../../assests/heartlogo.avif"

const Footer = () => {
  return (
    <div className="background">
    <div className=" top-contanier ">
    
        <h2 className="text-light pt-4">
          The values that hold us,
          <br /> true and to account{" "}
        </h2>
      
      <div className="row mt-5">
        <div className="row-heading col-md-4 ">
          {/* <img src={square}/> */}
          <div className="row ">
            <div className="col-md-1 mr-1">
           <img className="heartlogo " src={heartlogo} alt=""/>   
            </div>
            <div className="col-md-3">
            <h5 className="text-light"> Simplicity</h5>
            </div>
            
            <div className="para">
              <p className="para text-light">
                Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque
                non iusto nihiaS technology
              </p>
            </div>
          </div>
        </div>
        <div className="row-heading col-md-4">
          {/* <img src={square}/> */}
          <div className="row">
            <div className="col-md-1">
              <img className="heartlogo" src={heartlogo} alt=""/>
            </div>
            <div className="col-md-4 w-75">
            <h5 className="text-light"> Social Good</h5>
            </div>
            <div className="para">
              <p className="text-light">
                Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque
                non iusto nihi
              </p>
            </div>
          </div>
        </div>
        <div className="row-heading col-md-4">
          {/* <img src={square}/> */}
          <div className="row">
            <div className="col-md-1">
              <img className="heartlogo" src={heartlogo} alt=""/>
            </div>
            <div className="col-md-3">
            <h5 className="text-light"> Trust</h5>
            </div>
            <div className="para">
              <p className="text-light">
                Lorem ipsum dolor sit amet. Et aliquam autem ex ducimus atque
                non iusto nihistomer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-secondary p-2  p-5 mt-5">
        <div className="row">
          <div className="col-md-8">
            {/* <img>logo</img> */}
            <h3 className="text-light">
              Ready for a simple future ?
            <h3 className="text-dark"> Let's get started!</h3>
            </h3>
          </div>

          <div className="col-md-4 d-flex justify-content-end mt-3 rounded">
            <button className="button btn btn-dark btn-sm">
              <p> Get started</p>
            </button>
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="footer text-start ">
        <div className="row mt-5">
        <div className="col-md-1">
            <span className="text-light"> &copy; 2018</span>
          </div>
          <div className="col-md-11">

         
        
        <div className="row">
          {/* <div className="col-md-2">
            <span className="text-light"> &copy; 2018</span>
          </div> */}

          <div className="col-md-2">
            <h6 className="text-light ">Customer</h6>
            <ul>
              <li>
                <a href="_#" className="list-group-item disabled border-none">Buyer</a>
              </li>

              <li>
                <a href="_#" className="text-decoration-none text-secondary">Supplier</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 ">
            <h6 className="text-light">Company</h6>

            <ul>
              <li>
                <a href="#_" className="text-decoration-none text-secondary">about us</a>
              </li>
              <li>
                <a href="#_"className="text-decoration-none text-secondary">Career</a>
              </li>
              <li>
                <a href="#_" className="text-decoration-none text-secondary">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 ">
            <h6 className="text-light">Further information</h6>
            <ul className="list-group">
              <li className="list-group-item"> 
                <a href="#_"className="text-decoration-none text-secondary">Terms and conditions</a>
              </li>
              <li>
                <a href="#_"className="text-decoration-none text-secondary">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="text-light">Follow us</h6>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Footer;