import React from 'react';
import {Fragment, useCallback, useMemo, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
import './Navbar.css';

// const Navbar = ({firstName}) => {
export default function Navbar({firstName}) {
  return (
    <div className='navbar'>
        <header id="main-header">
                <div className="container">
                    <h1>Ingrid'd Grid</h1>
                    <div id="header-pic">
                        <img src="C:\Users\ingri\Documents\GitHub\outofthegrid\grid-website\images\profile_picture.jpg" alt="Drawing of a blonde woman looking at her phone, seen from behind."/>
                    </div>
                </div>
        </header>
        <div className="navbar-container">
          <div className="navbar-container-sections">
            <div className="navbar-section"><p><a href="#">Home</a></p></div>
            <div className="navbar-section"><p><a href="#">Data & ML</a></p></div>
            <div className="navbar-section"><p><a href="#">Systems & Architecture</a></p></div>
            <div className="navbar-section"><p><a href="#">Misc</a></p></div>
              <div className="navbar-section-item"><a href="#">Reading list</a></div>
              <div className="navbar-section-item"><a href="#">Recipe list</a></div>
            </div>
          </div>
        </div>
  )
}

// export default function Navbar({firstName}) {

//   const [trip_list, setTripList] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5174/api/trips') //api/activities
//         .then((response) => response.json()) // .concat([{ id: 3, name: 'Item 3' }]
//         .then((data) => setTripList(data));
//     }, []);

//   console.log(trip_list)

//   return (
//     <div className='navbar'>
//         <header id="main-header">
//                 <div className="container">
//                     <h1>Welcome back, {firstName}!</h1>
//                     <div id="header-pic"></div>
//                 </div>
//         </header>
//         <div className="navbar-container">
//           <div className="navbar-container-sections">
//             <div className="navbar-section">  {/*class="navbar-trips"*/}
//               <a href="#">Trips</a>
//               <div className="navbar-trip-list">

//                 {Object.entries(trip_list).map((a) => (
//                   <p className="navbar-trip-list-item"> {a[1]['name_trip']} </p>
//                   ))}

//               </div>
//             </div>
//             <div className="navbar-section"><a href="#">Travel preferences</a></div>
//             <div className="navbar-section"><a href="#">Account</a></div>
//             </div>
//           </div>
//         </div>
//   )

// }
