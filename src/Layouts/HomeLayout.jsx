import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useDispatch } from 'react-redux';
import { useSelector as userSelector } from 'react-redux';
import { useSelector as useSelectort } from 'react-redux';






function HomeLayout({ children }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isloggedIn = useSelectort((state) => state?.auth?.isLoggedIn);

    const role = userSelector((state) => state?.auth?.role);

    function changeWidth() {

        const drawerSide = document.getElementsByClassName('drawer-side');
        drawerSide[0].style.width = 'auto';

    }

    function hideDrawer() {
        const element = document.getElementsByClassName('drawer-toggle');
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName('drawer-side');
        drawerSide[0].style.width = '0';
        // changeWidth();
    }


    function handleLogout(e) {
        e.preventDefault();
        // const res = await dispatch(logout()); 
        if (res?.payload?.success) 

        navigate('/');

    }




    return (
        <div className="min-h-[90vh] ">

            <div className="drawer absolute left-0 z-50 w-fit">

                <input className="drawer-toggle" id="my-drawer" type="checkbox" />


                <div className="drawer-contant">
                    <label htmlFor="my-drawer" className="cursor-pointer relative *:">

                        <FiMenu
                            onClick={changeWidth}
                            size={"32px"}
                            className="text-bold text-white-800 m-4" />
                    </label>
                </div>

                <div className="drawer-side w-0 ">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48  sm:w-80 bg-base-100 text-base-content relative ">
                        {/* Sidebar content here */}

                        <li className='w-fit absolute right-2 z-50 '>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={20}
                                />

                            </button>
                        </li>

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        {isloggedIn && role === 'ADMIN' && (
                            <li>
                                <Link to="/admin/dashboard">Dashboard</Link>
                            </li>
                        )}

                        <li>
                            <Link to="/products">All Products</Link>
                        </li>


                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>


                        <li>
                            <Link to="/about">About Us</Link>
                        </li>


                        {!isloggedIn && (


                            <li >

                                <div className="w-full flex item-center justify-center">
                                    <button className=" btn-primary w-full px-4 py-1 font-semibold text-white rounded-md bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300">
                                        <Link to="/login">Login</Link>
                                    </button>

                                    <button className=" btn-secondary w-full px-4 py-1 font-semibold text-white rounded-md bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300">
                                        <Link to="/signup">Signup</Link>
                                    </button>

                                </div>

                            </li>

                        )}

                         {isloggedIn && (


                            <li >

                                <div className="w-full flex item-center justify-center">
                                    <button className=" btn-primary w-full px-4 py-1 font-semibold text-white rounded-md bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300">
                                        <Link to="/user/profile">Profile</Link>
                                    </button>

                                    <button className=" btn-secondary w-full px-4 py-1 font-semibold text-white rounded-md bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300">
                                        <Link onClick={handleLogout}>logout</Link>
                                    </button>

                                </div>

                            </li>

                        )}





                    </ul>
                </div>

            </div>


            {children}

            <Footer />

        </div>
    );

}

export default HomeLayout;
