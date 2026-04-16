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
                            <h1>440 ש"ח</h1>
                            <h3>לחודש</h3>
                        </div>
                        <div className='sub-description'>
                            <p>מנוי חודשי ללא התחייבות</p>
                            <p>מסגרת אימוני כח מלאה</p>
                            <p>עם ליווי, מעקב ותכנית אישית</p>
                            
                        </div>
                        <p className='side-note'>מתחדש אוטומטית באשראי</p>
                        <p className='side-note'>ניתן לבטל בהתראה של 30 יום מראש</p>
                        <div className="page-button">
                            <button
                                aria-label="קישור לואצאפ עם מאמן"
                                onClick={() => {
                                    const msg = "שלום, אני מעוניין להצטרף עם מנוי חודשי בעלות 440 שקלים  ";
                                    window.open(WhatsappLink + encodeURIComponent(msg), "_blank");
                                }}
                            >
                                קביעת אימון היכרות
                            </button>
                        </div>
                    </div>

                    <div className="sub-card">
                        <h1>Freedom</h1>
                        <div className="price">
                            <h1>400 ש"ח</h1>
                            <h3>לחודש</h3>
                        </div>
                        <div className='sub-description'>
                            <p>התחייבות לחצי שנה</p>
                            <p>מסגרת אימוני כח מלאה</p>
                            <p>עם ליווי, מעקב ותכנית אישית</p>
                            
                        </div>
                        <p className='side-note'>מתחדש אוטומטית באשראי</p>
                        <p className='side-note'>ניתן לבטל בהתראה של 30 יום מראש</p>
                        <div className="page-button">
                            <button
                                aria-label="קישור לואצאפ עם מאמן"
                                onClick={() => {
                                    const msg = "שלום, אני מעוניין להצטרף עם מנוי התחייבות לחצי שנה בעלות 400 שקלים לחודש";
                                    window.open(WhatsappLink + encodeURIComponent(msg), "_blank");
                                }}
                            >
                                לבחירה לחצו כאן
                            </button>
                        </div>
                    </div>

                     <div className="sub-card">
                        <h1>Commit</h1>
                        <h2>מנוי ללא הגבלת כניסה</h2>
                        <div className="price">
                            <h1>300 ש"ח</h1>
                            <h3>לחודש</h3>
                        </div>
                        <div className='sub-description'>
                            <p>התחייבות לשנה</p>
                            <p>מסגרת אימוני כח מלאה</p>
                            <p>עם ליווי, מעקב ותכנית אישית</p>
                            
                        </div>
                        <p className='side-note'>מתחדש אוטומטית באשראי</p>
                        <p className='side-note'>ניתן לבטל בהתראה של 30 יום מראש</p>
                        <div className="page-button">
                            <button
                                aria-label="קישור לואצאפ עם מאמן"
                                onClick={() => {
                                    const msg = "שלום, אני מעוניין להצטרף עם מנוי התחייבות לשנה בעלות 300 שקלים לחודש";
                                    window.open(WhatsappLink + encodeURIComponent(msg), "_blank");
                                }}
                            >
                                לבחירה לחצו כאן
                            </button>
                        </div>
                    </div>

                    <div className="sub-card">
                        <h1>Access Only</h1>
                        <h2>למתאמנים מנוסים, ללא ליווי מאמן</h2>
                        <div className="price">
                            <h1>250 ש"ח</h1>
                            <h3>לחודש</h3>
                        </div>
                        <p className='side-note'>מתחדש אוטומטית באשראי</p>
                        <p className='side-note'>ניתן לבטל בהתראה של 30 יום מראש</p>
                        <div className="page-button">
                            <button
                                aria-label="קישור לואצאפ עם מאמן"
                                onClick={() => {
                                    const msg = "שלום, אני מעוניין להצטרף עם מנוי 250 שקלים לחודש";
                                    window.open(WhatsappLink + encodeURIComponent(msg), "_blank");
                                }}
                            >
                                לבחירה לחצו כאן
                            </button>
                        </div>
                    </div> 
                    <div className="sub-card">
                        <h1>Add-on</h1>
                        <h2>תפריט תזונה מותאים אישית</h2>
                        <div className="price">
                            <h1>250 ש"ח</h1>
                            <h3>תשלום חד פעמי</h3>
                        </div>
                        <div className="page-button">
                            <button
                                aria-label="קישור לואצאפ עם מאמן"
                                onClick={() => {
                                    const msg = " שלום, אני מעוניין בתפריט תזונה חד פעמי בעלות 250 שקלים";
                                    window.open(WhatsappLink + encodeURIComponent(msg), "_blank");
                                }}
                            >
                                לבחירה לחצו כאן
                            </button>
                        </div>
                    </div> 
                </div>
            </BackgroundImage>
        </div>
    );
};

export default Subscriptions;
