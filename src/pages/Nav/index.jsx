// import React from 'react'
// import { Outlet } from 'react-router-dom'
// // import NavBar from '../../sections/components/NavBar'

// const Root = () => {
//   return (
//     <div className=''>
//       {/* <NavBar /> */}
//       <p>Hello world</p>
//         <div className=''>
//           <Outlet />
//         </div>
//     </div>
//   )
// }

// export default Root
import { Link } from 'react-router-dom';
import '../../App.css';
export default function Navbar() {
    return (
        <div className="nav">
            <div className='brand'>
                <p className='brandName'>Technical Assesment</p>
            </div>
            <ul>
                <Link to='/' className='link'>
                    Home
                </Link>
                <Link to='/history' className='link'>
                    History
                </Link>
            </ul>
        </div>
    )
}