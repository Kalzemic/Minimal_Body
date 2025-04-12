import BackgroundImage from "./BackgroundImage";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Page.css'
const HomePage: React.FC = () => {

    const whatsappLink = "...";
    const InstaLink = "https://www.instagram.com/minimalbodyil/";


    return (
        <div className="mainpage">
            <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
                <BackgroundImage url="/minimal_body_5.png" >
                    <div className="page-content">
                        <div >
                            <img src="/minimal_body_logo.png" alt="minimal body Logo" className="logo" />
                        </div>
                        <div className="social-media">
                            <button className="Whatsapp-button"
                                onClick={() => window.open(whatsappLink, "_blank")}>

                                <FaWhatsapp className="whatsapp-icon" />
                            </button>
                            <button className="Instagram-button"
                                onClick={() => window.open(InstaLink, "_blank")}>

                                <FaInstagram className="Instagram-icon" />
                            </button>
                        </div>
                    </div>

                </BackgroundImage>


            </div>
            <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
                <BackgroundImage url="minimal_body_4.png" >
                    <div className="page-content">
                        <h1>למה Minimal Body?</h1>
                        <h2> ✅ אימוני כוח בלבד – בלי הסחות דעת, בלי בלגן, רק תוצאות.</h2>
                        <h2>✅ מכשור מתקדם – ציוד מקצועי שמבטיח אימון מדויק ובטוח.</h2>
                        <h2>✅ תוכנית מותאמת אישית – כל אימון מותאם לך אישית ומבוסס נתונים.</h2>
                        <h2>✅ מעקב התקדמות חכם – מערכת דיגיטלית שעוקבת אחר כל חזרה ומשקל שלך.</h2>
                        <h2>✅ ללא התחייבות ארוכת טווח – ניתן לבטל בכל שלב בהתראה של 30 יום.</h2>
                        <h2>✅ כמות מתאמנים מוגבלת – בלי עומס, בלי המתנה למכשירים.</h2>
                        <h2>✅ ליווי מקצועי קבוע – מאמנים עם תשוקה למקצוע שידאגו שתתאמן בצורה נכונה ויעילה.</h2>
                    </div>
                </BackgroundImage>
            </div>
            <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
                <BackgroundImage url="/minimal_body_2.png">
                    <div className="page-content">
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
        </div>


    );


}


export default HomePage;