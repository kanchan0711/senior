// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     // FaRegChartBar,
//     // FaCommentAlt,
//     // FaShoppingBag,
//     // FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';


// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/About",
//             name:"About",
//             icon:<FaUserAlt/>
//         },
//         // {
//         //     path:"/analytics",
//         //     name:"Analytics",
//         //     icon:<FaRegChartBar/>
//         // },
//         // {
//         //     path:"/comment",
//         //     name:"Comment",
//         //     icon:<FaCommentAlt/>
//         // },
//         // {
//         //     path:"/product",
//         //     name:"Product",
//         //     icon:<FaShoppingBag/>
//         // },
//         // {
//         //     path:"/productList",
//         //     name:"Product List",
//         //     icon:<FaThList/>
//         // }
//      ]
//     return (
//         <div className="side">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;



import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
// import "./Sidebar.css";
import { FaHome, FaUsers, FaAddressBook, FaFileInvoice, FaUser, FaCalendarAlt, FaQuestionCircle, FaChartBar, FaBars } from "react-icons/fa";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to}>{title}</Link>
    </MenuItem>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="sidebar">
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <FaBars /> : undefined}
            className="logo"
          >
            {!isCollapsed && (
              <>
                <span className="logo-text">ADMINIS</span>
                <FaBars className="menu-icon" onClick={() => setIsCollapsed(!isCollapsed)} />
              </>
            )}
          </MenuItem>

          {!isCollapsed && (
            <div className="profile">
              <div className="profile-image">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </div>
              <div className="profile-info">
                <h2 className="profile-name">Ed Roh</h2>
                <h5 className="profile-role">VP Fancy Admin</h5>
              </div>
            </div>
          )}

          <div className="menu">

            <Item
              title="Dashboard"
              to="/Dashboard"
              icon={<FaHome />}
              selected={selected}
              setSelected={setSelected}
            />

            <div className="menu-heading">Data</div>
            <Item
              title="Manage Team"
              to="/team"
              icon={<FaUsers />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<FaAddressBook />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<FaFileInvoice />}
              selected={selected}
              setSelected={setSelected}
            />

            <div className="menu-heading">Pages</div>
            <Item
              title="Profile Form"
              to="/form"
              icon={<FaUser />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<FaCalendarAlt />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<FaQuestionCircle />}
              selected={selected}
              setSelected={setSelected}
            />

            <div className="menu-heading">Charts</div>
            <Item
              title="Bar Chart"
              to="/bar-chart"
              icon={<FaChartBar />}
              selected={selected}
              setSelected={setSelected}
           />
</div>
</Menu>
</ProSidebar>

</div>
 
 
);
};

export default Sidebar;
