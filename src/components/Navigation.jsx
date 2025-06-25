import { Link } from "react-router-dom";




function Navigation  ({token, setToken}) {

    const logout = () => {
        setToken("");
        localStorage.clear(token)
    };

    return (
       
           <>
            
                {token ? 
                    
                    <div className="navItems">

                    <Link to="/" className="navLink">
                    Home
                    </Link>

                    <Link to="/users/:id" className="navLink">
                    My Account
                    </Link>

                    <Link to="/products/" className="navLink">
                    Products
                    </Link>

                    <button onClick={logout} className="navButton">Logout</button>
                    </div>
                 : 
                    <div className="navItems">
                    <Link to="/" className="navLink">Home</Link>

                    <Link to="/products" className="navLink">
                    Products
                    </Link>

                    <Link to="/users/login" className="navLink"> Login </Link>
                    
                    <Link to="/users/register" className="navLink"> Register </Link>
                    </div>
                }
            </>
        
    );

};

export default Navigation

