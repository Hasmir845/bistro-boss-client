import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const isAdmin = true;

    return (
        <div className=' flex'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-4'>
                   {
                    isAdmin ? <>
                     <li className=' py-1'>
                        <NavLink to={"/dashboard/adminHome"}><FaHome></FaHome>Admin Home</NavLink>
                        </li>
                    <li className=' py-1'>
                        <NavLink to={"/dashboard/addItems"}><FaUtensils></FaUtensils>Add Items</NavLink>
                        </li>
                    <li className=' py-1'>
                        <NavLink to={"/dashboard/manageItems"}><FaList></FaList>Manage Items</NavLink>
                        </li>
                    <li className=' py-1'>
                        <NavLink to={"/dashboard/bookings"}><FaBook></FaBook>Manage Bookings</NavLink>
                        </li>
                    <li>
                        <NavLink to={"/dashboard/users"}><FaUsers></FaUsers>All Users</NavLink>
                        </li>
                    </> : <>
                    <li className=' py-1'>
                        <NavLink to={"/dashboard/userHome"}><FaHome></FaHome>User Home</NavLink>
                        </li>
                    <li className=' py-1'>
                        <NavLink to={"/dashboard/reservation"}><FaCalendar></FaCalendar>Reservation</NavLink>
                        </li>
                    <li className=' py-1'>
                        <NavLink to={"/dashboard/cart"}><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink>
                        </li>
                    <li className=' py-1'>
                        <NavLink to={"/dashboard/review"}><FaAd></FaAd>Add a Review</NavLink>
                        </li>
                    <li className=' py-1'>
                        <NavLink to={"/dashboard/bookings"}><FaList></FaList>My Bookings</NavLink>
                        </li>
                    </>
                   }
                        {/* shared */}
                        <div className=' divider'></div>
                        <li className=' py-1'>
                        <NavLink to={"/"}><FaHome></FaHome>Home</NavLink>
                        </li>
                        <li className=' py-1'>
                        <NavLink to={"/order/salad"}><FaSearch></FaSearch>Menu</NavLink>
                        </li>
                        <li className=' py-1'>
                        <NavLink to={"/order/salad"}><FaEnvelope></FaEnvelope>Contact</NavLink>
                        </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className=' flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;