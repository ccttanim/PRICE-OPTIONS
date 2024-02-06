import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
    const[open, setopen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/*', name: 'NotFound' },
      ];
      
      
    return (
        <nav>
        <div className="md:hidden text-2xl" onClick={()=> setopen(!open)}>
        {
            open === true ? <IoCloseCircle></IoCloseCircle> : <IoIosMenu className=""></IoIosMenu>
        }
        
        </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route} ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;