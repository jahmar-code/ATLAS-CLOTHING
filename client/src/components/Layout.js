// import React from 'react';


 import Navbar from './Navbar';
 import Footer from './Footer';

// const Layout = ({ children }) => {
//   return (
//     <div className="layout">
//       {/* <Head>
//         <title>JS Mastery Store</title>
//       </Head> */}
//       <header>
//         <Navbar />
//       </header>
//       <main className="main-container">
//         {children}
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   )
// }

// export default Layout

import React from "react"
// import Header from "./Header/Header"
// import Footer from "./Footer/Footer"
import { useEffect } from 'react';


class Layout extends React.Component {
  render(){
    return (
      <>
        <header>
         <Navbar />
       </header>
        <main>{this.props.children}</main>
        <footer>
         <Footer />
       </footer>
      </>
    )
  }
}

export default Layout;
