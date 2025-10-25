
import BackgroundImage from "./BackgroundImage";

import ContactPage from "./ContactPage";
import './Page.css'
import Subscriptions from "./Subscriptions";
import { useScrollReveal } from "../hooks/UseScrollReveal";
const HomePage: React.FC = () => {

    const WhatsappLink = "https://wa.me/972525772886";
    useScrollReveal();


    return (
        <div className="mainpage">
            <section id="home">
                <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
                    <BackgroundImage url="/minimal_body_5.png" >
                        <div className="page-content scroll-reveal">
                            <div >
                                <img src="/minimal_body_logo.png" alt="minimal body Logo" className="logo" />
                                <div className="page-button">
                                    <button aria-label="קישור לואצאפ עם מאמן" onClick={() => window.open(WhatsappLink, "_blank")}> הצטרפו לתנועה</button>
                                </div>
                            </div>

                        </div>

                    </BackgroundImage>
                </div>
            </section>
            <section id="signup">
                <ContactPage />
            </section>
            <section id="subscriptions">
                <Subscriptions />
            </section>
            <section id="why_us">
                <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
                    <BackgroundImage url="minimal_body_4.png" >
                        <div className="page-content scroll-reveal">
                            <h1>למה Minimal Body?</h1>
                            <h2><span> ✅ אימוני כוח בלבד – בלי הסחות דעת, בלי בלגן, רק תוצאות.</span></h2>
                            <h2><span>✅ מכשור מתקדם – ציוד מקצועי שמבטיח אימון מדויק ובטוח.</span></h2>
                            <h2>✅ תוכנית מותאמת אישית – כל אימון מותאם לך אישית ומבוסס נתונים.</h2>
                            <h2>✅ מעקב התקדמות חכם – מערכת דיגיטלית שעוקבת אחר כל חזרה ומשקל שלך.</h2>
                            <h2>✅ ללא התחייבות ארוכת טווח – ניתן לבטל בכל שלב בהתראה של 30 יום.</h2>
                            <h2>✅ כמות מתאמנים מוגבלת – בלי עומס, בלי המתנה למכשירים.</h2>
                        </div>
                    </BackgroundImage>
                </div>
            </section>
            <section id="method">
                <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
                    <BackgroundImage url="/minimal_body_2.png">
                        <div className="page-content scroll-reveal">
                            <h1>איך זה עובד?</h1>
                            <h2>🔹 אימון היכרות מותאם אישית – כדי להבין את הצרכים והמטרות שלך.</h2>
                            <h2>🔹 שיבוץ לשעות קבועות – מה שמסייע לך להתמיד ולראות תוצאות.</h2>
                            <h2>🔹 בניית תוכנית אימונים מדויקת – המבוססת על שיטת Minimal Body, עם תרגילים שמשרתים אך ורק את המטרה שלך.
                            </h2>
                            <h2>🔹 אימון של שעה בלבד – עם מנוחה והתאוששות אופטימלית בין אימונים.
                            </h2>
                            <h2>🔹 אין חובה לשלב אירובי – אימוני כוח מדויקים יספיקו לתוצאות מעולות.
                            </h2>
                        </div>
                    </BackgroundImage>
                </div>
            </section>

            <footer className="contact-footer">
                <div className="footer-content">
                    <span>
                        📍 <a href="https://maps.google.com/?q=מתחם המרינה מול, אשקלון" target="_blank" rel="noopener noreferrer">
                            מתחם המרינה מול, אשקלון
                        </a></span><br />
                    <span>📞 טלפון: 052-577-2886</span><br />
                    <span>✉️ אימייל: minimalbody24@gmail.com</span><br />
                    <div className="footer-legal">
                        <span>© {new Date().getFullYear()} Minimal Body — כל הזכויות שמורות</span><br />
                        <span
                            className="signature"
                        >Made by <button style={{ color: '#ff7b00', background: 'black' }} onClick={() => window.open('http://www.archweb.co.il')} >ArchWeb</button></span>
                    </div>
                </div>
            </footer>


        </div >


    );


}


export default HomePage;