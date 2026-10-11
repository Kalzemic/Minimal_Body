import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer" dir="rtl">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <h2 lang="en">
                            MINIMAL <span>BODY.</span>
                        </h2>
                        <p>פחות עומס. יותר תוצאות.</p>
                    </div>

                    <div className="footer-info">
                        <h3>דברו איתנו</h3>

                        <a href="tel:+972525772886">
                            052-577-2886
                        </a>

                        <a href="mailto:minimalbody24@gmail.com">
                            minimalbody24@gmail.com
                        </a>
                    </div>

                    <div className="footer-location">
                        <h3>איפה אנחנו?</h3>

                        <a
                            href="https://maps.google.com/?q=מתחם המרינה מול, אשקלון"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            מרינה מול, קומה 2
                            <span>ליד מסעדת המרסה, אשקלון</span>
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>
                        © {new Date().getFullYear()} Minimal Body.
                        כל הזכויות שמורות.
                    </span>

                    <a
                        className="footer-credit"
                        href="https://www.archweb.co.il"
                        target="_blank"
                        rel="noopener noreferrer"
                        lang="en"
                    >
                        Made by <strong>ArchWeb</strong>
                        <span className="footer-credit-arrow" aria-hidden="true">
                            ↗
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}