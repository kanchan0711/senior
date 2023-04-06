import React from "react";
import "../App.css";
import { FaUserAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="row m-5 ">
      <div className="col-md-4 ">
          <div style={{ borderRadius: "20px" }} className="border ">
      <div className="row m-3  py-3">
          <div className="col-md-2">
            <FaUserAlt/>
          </div>
          <div className="col-md-8">
            Student profile
          </div>
          <div className="col-md-2">
          <FaUserAlt/>
          </div>
        </div>
        <div className="row m-3 py-3">
          <div className="col-md-2">
            <FaUserAlt/>
          </div>
          <div className="col-md-8">
            Student profile
          </div>
          <div className="col-md-2">
          <FaUserAlt/>
          </div>
        </div>
        <div className="row m-3 py-3">
          <div className="col-md-2">
            <FaUserAlt/>
          </div>
          <div className="col-md-8">
            Student profile
          </div>
          <div className="col-md-2">
          <FaUserAlt/>
          </div>
        </div>
        <div className="row m-3 py-3">
         
          <div className="col-md-10">
            help center
          </div>
          <div className="col-md-2">
          <FaUserAlt/>
          </div>
        </div>
        <div className="row m-3 py-3">
         
         <div className="col-md-10">
           help center
         </div>
         <div className="col-md-2">
         <FaUserAlt/>
         </div>
       </div>
       <div className="row m-3 py-3">
         
         <div className="col-md-10">
           help center
         </div>
         <div className="col-md-2">
         <FaUserAlt/>
         </div>
       </div>
       <div className="row m-3 py-3">
         
         <div className="col-md-10">
           help center
         </div>
         <div className="col-md-2">
         <FaUserAlt/>
         </div>
       </div>
       <div className="row m-3 py-3">
         
         <div className="col-md-10">
           help center
         </div>
         <div className="col-md-2">
         <FaUserAlt/>
         </div>
       </div>
    </div>
    </div>

        {/* student profile page */}
        <div className="col mx-5">
          <div className="row my-4">
            <div className="col-md-8 ">
              <b style={{ fontSize: "25px" }}>Kanchan</b>
              <div>verified student</div>
            </div>
            <div className="col-md-4 ">
              <button type="button" class="btn btn-light">
                Light
              </button>
            </div>
          </div>
          <div className="row my-5 ">
            <div className="col-md-4 ">
              <div>Age</div>
              <div>_</div>
            </div>
            <div className="col-md-4 ">
              <div>Goals</div>
              <div>_</div>
            </div>
            <div className="col-md-4 ">
              <div>Degree</div>
              <div>_</div>
            </div>
          </div>
          <div className="row my-5 ">
            <div className="col-md-4 ">
              <div>Industry</div>
              <div>_</div>
            </div>
            <div className="col-md-4 ">
              <div>Employment</div>
              <div>_</div>
            </div>
            <div className="col-md-4 ">
              <div>Gender</div>
              <div>_</div>
            </div>
          </div>
          <div className="row my-5 ">
            <div className="col-md-4 ">
              <div>Membership Status</div>
              <div>Active</div>
            </div>
            <div className="col-md-4 ">
              <div>Membership Type</div>
              <div>Lifetime Membership</div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-light">
          Light
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
