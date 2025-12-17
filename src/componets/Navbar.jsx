import { Link } from 'react-router-dom';

export default function Nav() {
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/shop">Shop</Link> |
            <Link to="/cart">Cart</Link> |
            <Link to="/favourite">Favourite</Link> |
            <Link to="/contact">Contact</Link> |
            {token ? <button onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>}
        </nav>
    );
}
