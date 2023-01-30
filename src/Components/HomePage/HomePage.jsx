import React from "react";
import IntelLogo from "../../assests/IntelLogo.png";
import HexagoneShape from "../../assests/HexagoneShape.png";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
         
        <div className="d-flex p-4 mt-5">
          <div className="col-md-4">
        <img className="img-fluid w-75 p-4" src={HexagoneShape} alt=''/>

        </div>

          <div className="col-md-8">

          <div className="row  mt-5 ">
            <div className="col-md-4">
              <h3>100%</h3>
              <p>SaaS technologya</p>
            </div>
            <div className="col-md-4">
              <h3>100%</h3>

              <p>SaaS technology</p>
            </div>
            <div className="col-md-4">
              <h3> 100%</h3>

              <p>SaaS technology</p>
            </div>
          </div>

          <div className="row  mt-5 ">
            <div className="col-md-4">
              <h3>100%</h3>
              <p>SaaS technologya</p>
            </div>
            <div className="col-md-4">
              <h3>100%</h3>

              <p>SaaS technology</p>
            </div>
            <div className="col-md-4">
              <h3>100%</h3>

              <p>SaaS technology</p>
            </div>
          </div>
          </div>
          </div>

          {/* <div  class="mx-auto mt-5 w-50" >
          <div className="row">
            <div className="col-4 px-2 ">
              <h3>100%</h3>
              <p>SaaS technology</p>
            </div>
            <div className="col-4 ">
              <h3>100+</h3>
              <p>Threat intel sources</p>
            </div>
            <div className="col-4">
              <h3>100+</h3>
              <p>Threat intel sources</p>
            </div>
          </div> */}

          {/* <div className="row mt-5">
            <div className="col-4">
              <h3>100%</h3>
              <p>SaaS technology</p>
            </div>
            <div className="col-4 ">
              <h3>1,400+</h3>
              <p>Buit in queries</p>
            </div>
            <div className="col-4">
              <h3>200+</h3>
              <p>Costomer</p>
            </div>
          </div> */}
        

        <div className="row mt-5 ps-5 mb-5  d-flex justify-content-center ">
          <div className="col-2 ">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt='_' />
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt='' />
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt='' />
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt='' />
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo} alt=''/>
          </div>
          <div className="col-2">
            <img className="d-flex p-1 w-50" src={IntelLogo}  alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;