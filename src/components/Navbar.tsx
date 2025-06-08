
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-left">
                    <img src="minimal_body_logo.png" alt="Company Logo" className="logo" />
                </div>
                <div className="navbar-center">
                    <ul>
                        <li><a href="#home">דף הבית</a></li>
                        <li><a href="#signup">להרשמה</a></li>
                        <li><a href="#subscriptions">אפשרויות מנוי</a></li>
                        <li> <a href="#why_us">למה Minimal Body?</a></li>
                        <li><a href="#method">השיטה שלנו</a></li>
                    </ul>
                </div>
                <div className="navbar-right" />
            </div>
        </nav>
    );
}

export default Navbar;
