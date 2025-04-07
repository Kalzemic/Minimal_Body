import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar" >
            <ul>
                <li><Link to="/">דף הבית</Link></li>
                <li><Link to="/QApage">למה Minimal Body?</Link></li>
                <li><Link to="/Method">איך זה עובד</Link></li>
                <li><Link to="/Chart">מעקב תזונתי</Link></li>
                <li><Link to="/Subscriptions">המנויים שלנו</Link></li>
                <li><Link to="/Contact">צרו קשר</Link></li>

            </ul>
        </nav >
    );
}

export default Navbar;