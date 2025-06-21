import { Link } from "react-router-dom";




const Navigation = ({Logout, token}) => {
    return (
        <nav className="navigation">
            <div className="navItems">
                <Link to="/" className="navLink">
                    Home
                    </Link>
                <Link to="/products" className="navLink">
                    Products
                    </Link>

                {token ? (
                    <>
                    <Link to="/users/:id" className="navLink">
                    My Account
                    </Link>
                    <Link to="/products/:id" className="navLink">
                    Products
                    </Link>
                    <button onClick={Logout} className="navButton">Logout</button>
                    </>
                ) : (
                    <>
                    <Link to="/users/login" className="navLink"> Login </Link>
                    <Link to="/users/register" className="navLink"> Register </Link>
                    </>
                )}
            </div>
        </nav>
    );

};

export default Navigation

