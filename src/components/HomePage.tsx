
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
                    <video className='hero-video' src='/hero/background_video.mp4'autoPlay loop muted playsInline/>
                    <div className="page-content scroll-reveal">
                            <div className='logo-container'>
                                <img src="/minimal_body_logo.png" alt="minimal body Logo" className="logo" />
                                {/* <div className='logo-text'>
                                <p>אימוני כח מדויקים</p>
                                <p>למי שאין לו זמן להתבלבל</p>
                                </div> */}
                            </div>
                            <div className='concept-text'>
                                <h1>הדרך שלך לגוף חטוב וחזק, בלי העומס של חדר כושר</h1>
                                <h2>מתחם פרימיום המוגבל ל-10 מתאמנים בשעה בלבד. ליווי אישי וגישה 24/7 דרך האפליקציה</h2>
                            </div>
                            <div className="page-button" style={{marginTop:'10px'}}>
                                <button aria-label="קישור לואצאפ עם מאמן" onClick={() => window.open(WhatsappLink, "_blank")}>קביעת אימון היכרות</button>
                            </div>
                    </div>
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
                        <div className="page-content why-page scroll-reveal">
                            <div className='why-title'>
                                <h1>למה Minimal Body?</h1>
                            </div>
                            <div className='why-text'>
                            <h2><span> ✅ אימוני כוח מדויק – בלי חוגים.</span></h2>
                            <h2>✅ תוכנית אימונים אישית באפליקציה.</h2>
                            <h2>✅ מאמן נוכח לאורך כל האימון.</h2>
                            <h2>✅ עד 12 מתאמנים בחלל</h2>
                            <h2>✅ אימון ממוקד של עד שעה</h2>
                            </div>
                        </div>
                    </BackgroundImage>
                </div>
            </section>
            <section id="method">
                <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
                    <BackgroundImage url="/minimal_body_2.png">
                        <div className="page-content scroll-reveal">
                            <h1>איך זה עובד?</h1>
                            <div className='method-text'>
                            <h2>🔹 אימון היכרות מותאם אישית – כדי להבין את הצרכים והמטרות שלך.</h2>
                            <h2>🔹 שיבוץ לשעות קבועות – מה שמסייע לך להתמיד ולראות תוצאות.</h2>
                            <h2>🔹 בניית תוכנית אימונים מדויקת – המבוססת על שיטת Minimal Body, עם תרגילים שמשרתים אך ורק את המטרה שלך.
                            </h2>
                            <h2>🔹 אימון של שעה בלבד – עם מנוחה והתאוששות אופטימלית בין אימונים.
                            </h2>
                            <h2>🔹 אין חובה לשלב אירובי – אימוני כוח מדויקים יספיקו לתוצאות מעולות.
                            </h2>
                            </div>
                        </div>
                    </BackgroundImage>
                </div>
            </section>
            <section id='faq'>
            <div className="image-container" style={{ width: "100vw", height: "100vh", backgroundColor:'black' }}>
                    <div className="page-content scroll-reveal">
                        <h1>שאלות נפוצות</h1>
                        <video className='faq-video'src='/faq/faq_video.mp4' controls/>
                    </div>
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