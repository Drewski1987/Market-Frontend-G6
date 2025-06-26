import { Link } from "react-router-dom";




function Navigation  ({token, setToken, setUserId, userId}) {


    const logout = () => {
        setToken(null);
        setUserId(null)
    };

    return (
       
           <>
            
                {token ? 
                    
                    <div className="navItems">

                    <Link to="/" className="navLink">
                    Home
                    </Link>

                    <Link to={`/users/${(userId)}`} className="navLink">
                    My Account
                    </Link>
                    <Link to="/products" className="navLink">

                    Products
                    </Link>

                    <Link to={`/orders/${(userId)}`} className="navLink"> Order Here</Link>

                    <Link to="/reviews" className="navLink">
                    Reviews
                    </Link>

                    <button onClick={logout} className="button">Logout</button>
                    </div>
                 : 
                    <div className="navItems">
                    <Link to="/" className="navLink">Home</Link>

                    <Link to="/products" className="navLink">
                    Products
                    </Link>

                    <Link to="/reviews" className="navLink">Reviews</Link>

                    <Link to="/users/login" className="navLink"> Login </Link>
                    
                    <Link to="/users/register" className="navLink"> Register </Link> 

                    
                    </div>
                }
            </>
        
    );

};

export default Navigation

