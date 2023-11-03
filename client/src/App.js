import { BrowserRouter, Routes, Route } from 'react-router-dom'


// page components

//import Navbar from '../components_original/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Clothing from './pages/clothing/Clothing'
import Contact from './pages/contact/Contact'
import './App.css'
import Layout  from './components/Layout'
import { StateContext } from './context/StateContext'
import { Toaster } from 'react-hot-toast'
import React, { useState, useEffect } from "react";


// import { Layout } from './components/Layout'
import ProductDetails from './pages/product/[slug]'



function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  
  
  // just set up react-node api --- set up stripe next
  return (
    <div className="App">
      <BrowserRouter>
      <StateContext>
      <Layout>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Routes>
          <Route path="/clothing" element={<Clothing />} /> 
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Routes>
          <Route path="/product/:slug" element={<ProductDetails/>}/>
        </Routes>
        </Layout>
        </StateContext>
      </BrowserRouter>

    </div>



   
  );
}

export default App;

// import { Component } from 'react';
// class App extends Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = { apiResponse: "" };
// // }

// // // callAPI() {
// // //     fetch("http://localhost:9000/testAPI")
// // //         .then(res => res.text())
// // //         .then(res => this.setState({ apiResponse: res }));
// // // }

// // componentWillMount() {
// //     this.callAPI();
// // }


  
  
//   render() {
//   return (
//     <div className="App">
      
//       <BrowserRouter>
//       <StateContext>
//       <Layout>
//         <Toaster />
//         <Routes>
//           <Route path="/" element={<Home />} /> 
//         </Routes>
//         <Routes>
//           <Route path="/about" element={<About />} /> 
//         </Routes>
//         <Routes>
//           <Route path="/clothing" element={<Clothing />} /> 
//         </Routes>
//         <Routes>
//           <Route path="/contact" element={<Contact />} /> 
//         </Routes>
//         <Routes>
//           <Route path="/product/:slug" element={<ProductDetails/>}/>
//         </Routes>
//         </Layout>
//         </StateContext>
//       </BrowserRouter>

//     </div>



   
//   );
//   }
// }

// export default App;