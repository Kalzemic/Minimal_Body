import './Navbar.css'
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <img src="minimal_body_logo.png" alt="Company Logo" className="nav-logo" />
                    </div>

                    {/* Desktop nav */}
                    <div className="navbar-center desktop-menu">
                        <ul>
                            <li><a href="#home">דף הבית</a></li>
                            <li><a href="#signup">להרשמה</a></li>
                            <li><a href="#subscriptions">אפשרויות מנוי</a></li>
                            <li><a href="#faq">שאלות נפוצות</a></li>
                            <li><a href="#why_us">למה Minimal Body?</a></li>
                            <li><a href="#method">השיטה שלנו</a></li>
                            
                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <div className="hamburger-menu" onClick={toggleSidebar}>
                        ☰
                    </div>
                </div>
            </nav>

            {/* Sidebar menu */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={toggleSidebar}>דף הבית</a></li>
                    <li><a href="#signup" onClick={toggleSidebar}>להרשמה</a></li>
                    <li><a href="#subscriptions" onClick={toggleSidebar}>אפשרויות מנוי</a></li>
                    <li><a href="#faq" onClick={toggleSidebar}>שאלות נפוצות</a></li>
                    <li><a href="#why_us" onClick={toggleSidebar}>למה Minimal Body?</a></li>
                    <li><a href="#method" onClick={toggleSidebar}>השיטה שלנו</a></li>
                    
                </ul>
            </div>
        </>
    );
}

export default Navbar;
