// // import './App.css';
// // // import Dashboard from './pages/Dashboard';
// // import RecordedClasses from './pages/RecordedClasses';
// // // import HomePage from "./Components/HomePage/HomePage";
// // // import SupportFeature from "./Components/SupportFeature/SupportFeature"
// // // import Footer from "./Components/Footer/Footer"
// // // import Parallax from "./Components/Parallax/Parallax"
// // // import Homepage from "./Component/Homepage"
// // // import Sidebar from './Component/Sidebar';
// // function App() {
// //   return (
// //     <>
// //     {/* <Dashboard/> */}
// //     <RecordedClasses/>
// //     {/* <HomePage/> 
// //     <SupportFeature/> */}
// //    {/* <Footer/>  */}
// //       {/* <Parallax /> */}
// //       {/* <Homepage /> */}
// //       {/* <Sidebar /> */}
// //     </>
// //   );
// // }

// // export default App;



// // // import React from 'react';
// // // import './App.css';
// // // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // // import Sidebar from './Component/Sidebar';
// // // import Dashboard from './pages/Dashboard.jsx';
// // // import About from './pages/About.jsx';
// // // // import Analytics from './pages/Analytics.jsx';
// // // // import Comment from './pages/Comment.jsx';
// // // // import Product from './pages/Product.jsx';
// // // // import ProductList from './pages/ProductList.jsx';

// // // const App = () => {
// // //   return (
// // //     <BrowserRouter>
// // //       <Sidebar>
// // //         <Routes>
// // //           <Route path="/" element={<Dashboard />} />
// // //           <Route path="/dashboard" element={<Dashboard />} />
// // //           <Route path="/about" element={<About />} />
// // //           {/* <Route path="/comment" element={<Comment />} />
// // //           <Route path="/analytics" element={<Analytics />} />
// // //           <Route path="/product" element={<Product />} />
// // //           <Route path="/productList" element={<ProductList />} /> */}
// // //         </Routes>
// // //       </Sidebar>
// // //     </BrowserRouter>
// // //   );
// // // };

// // // export default App;










// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Sidebar from './Component/Sidebar';
// // import Dashboard from './pages/Dashboard.jsx';
// // import About from './pages/About.jsx';
// // import Analytics from './pages/Analytics.jsx';
// // import Comment from './pages/Comment.jsx';
// // import Product from './pages/Product.jsx';
// // import ProductList from './pages/ProductList.jsx';
// // import RecordedClasses from './pages/RecordedClasses';
// import Details from './pages/Details';

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Details/>
//       {/* <Sidebar>
//         <Routes>
//           {/* <Route path="/" element={<Dashboard />} /> 
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path ="/RecordedClasses" element={<RecordedClasses/>}/>
//           {/* <Route path="/about" element={<About />} />
//           <Route path="/comment" element={<Comment />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/productList" element={<ProductList />} /> 
//         </Routes>
//       </Sidebar> */}
//     </BrowserRouter>
//   );
// };

// export default App; 



import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import RecordedClasses from './pages/RecordedClasses';
import Details from './pages/Details';
// import About from './pages/About.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recordedclasses" element={<RecordedClasses />} />
          <Route path="/details" element={<Details />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;