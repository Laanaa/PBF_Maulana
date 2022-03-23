// // Jobsheet 3
// // import logo from './logo.svg';
// // import { Component } from 'react';
// // import Header from './Header';
// // import Footer from './Footer';
// // import List from './List';
// // import './App.css';

// // class App extends Component{
// //   render(){
// //     return (
// //       <div>
// //         <Header/>
// //         <h1>Component dari Class App</h1>
// //         <List/>
// //         <Footer judul='Halaman Footer' nama='Aufa'/>
// //       </div>
// //     );
// //   }
// // }

// // export default App;


//Jobsheet 5
// import * as React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";


// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to React Router!</h1>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="dashboard" element={<Dashboard />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// // App.js
// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//       </nav>
//     </>
//   );
// }

// function About() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>
//           That feels like an existential question, don't you
//           think?
//         </p>
//       </main>
//       <nav>
//         <Link to="/dashboard">Dashboard</Link>
//       </nav>
//     </>
//   );
// }

// // App.js

// function Dashboard() {
//   return (
//     <>
//       <main>
//         <h2>Dashboard</h2>
//         <p>
//           Ini adalah Dashboard
//         </p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }

import Example from './ParamsExample';

class App extends Component{
  render(){
    return (
      <div>
        <Example/>
      </div>
    );
  }
}

export default App;