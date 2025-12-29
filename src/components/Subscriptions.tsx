import BackgroundImage from './BackgroundImage';
import './Page.css';
import './Subscriptions.css';
import { useScrollReveal } from '../hooks/UseScrollReveal';

const Subscriptions: React.FC = () => {
    const WhatsappLink = "https://wa.me/972525772886?text=";
    useScrollReveal();

    return (
        <div className="image-container">
            <BackgroundImage url="/minimal_body_1.png">
                <div className="sub-page scroll-reveal">
                    <h1>המנוי של Minimal Body</h1>


                    <div className="sub-card">
                        <h1>Limitless</h1>
                        <div className="price">
                            <h1>399 ש"ח</h1>
                            <h3>לחודש</h3>
                        </div>
                        <div className='sub-description'>
                            <p>מסגרת אימוני כח מלאה</p>
                            <p>עם ליווי, מעקב ותכנית אישית</p>
                        </div>
                        <p className='side-note'>מתחדש אוטומטית באשראי</p>
                        <p className='side-note'>ניתן לבטל בהתראה של 30 יום מראש</p>
                        <div className="page-button">
                            <button
                                aria-label="קישור לואצאפ עם מאמן"
                                onClick={() => {
                                    const msg = "שלום, אני מעוניין להצטרף עם מנוי חודשי בעלות 399 שקלים על התחייבות לחצי שנה ";
                                    window.open(WhatsappLink + encodeURIComponent(msg), "_blank");
                                }}
                            >
                                קביעת אימון היכרות
                            </button>
                        </div>
                    </div>
{/* 
                    <div className="sub-card">
                        <h1>Limitless</h1>
                        <div className="price">
                            <h1>439 ש"ח</h1>
                            <h3>לחודש</h3>
                        </div>
                        <h2>מנוי חודשי ללא התחייבות</h2>
                        <div className="page-button">
                            <button
                                aria-label="קישור לואצאפ עם מאמן"
                                onClick={() => {
                                    const msg = "שלום, אני מעוניין להצטרף עם מנוי ללא התחייבות בעלות 439 שקלים לחודש";
                                    window.open(WhatsappLink + encodeURIComponent(msg), "_blank");
                                }}
                            >
                                לבחירה לחצו כאן
                            </button>
                        </div>
                    </div> */}

                    {/* <div className="sub-card">
                        <h1>Unlimited</h1>
                        <h2>מנוי ללא הגבלת כניסה</h2>
                        <div className="price">
                            <h1>599 ש"ח</h1>
                            <h3>\לחודש</h3>
                        </div>
                        <div className="page-button">
                            <button
                                aria-label="קישור לואצאפ עם מאמן"
                                onClick={() => {
                                    const msg = "שלום, אני מעוניין להצטרף עם מנוי ללא הגבלה בעלות 599 שקלים";
                                    window.open(WhatsappLink + encodeURIComponent(msg), "_blank");
                                }}
                            >
                                לבחירה לחצו כאן
                            </button>
                        </div>
                    </div>

                    <div className="sub-card">
                        <h1>NEXTGEN</h1>
                        <h2>מנוי לשני אימונים שבועיים עבור בני נוער</h2>
                        <div className="price">
                            <h1>379 ש"ח</h1>
                            <h3>\לחודש</h3>
                        </div>
                        <div className="page-button">
                            <button
                                aria-label="קישור לואצאפ עם מאמן"
                                onClick={() => {
                                    const msg = "שלום, אני מעוניין להצטרף עם מנוי לנוער בעלות 379 שקלים";
                                    window.open(WhatsappLink + encodeURIComponent(msg), "_blank");
                                }}
                            >
                                לבחירה לחצו כאן
                            </button>
                        </div>
                    </div> */}
                </div>
            </BackgroundImage>
        </div>
    );
};

export default Subscriptions;
