import { useEffect, useState } from "react";
import BackgroundImage from "./BackgroundImage";
import "./ContactPage"
import './Page.css'
const HomePage: React.FC = () => {


    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [cooldown, setCooldown] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(60);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const webhookUrl = "https://hooks.zapier.com/hooks/catch/22391451/20u3p6w/";

        const payload = {
            name,
            email,
            phone,
        };

        console.log("Sending payload to Zapier:", payload);

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            console.log("Response status:", response.status);

            if (response.ok || response.status === 204 || response.status === 200) {
                setCooldown(true);
                setSecondsLeft(60);
                setName("");
                setEmail("");
                setPhone("");
            } else {
                console.error("Server responded with error:", await response.text());
                alert("הפרטים נשלחו בהצלחה");
            }
        } catch (error) {
            console.error("Caught error in fetch:", error);
            alert("אירעה שגיאה. נסו שוב מאוחר יותר.");
        }
    };

    useEffect(() => {
        let timer: number;
        if (cooldown && secondsLeft > 0) {
            timer = setTimeout(() => setSecondsLeft(prev => prev - 1), 1000);
        } else if (cooldown && secondsLeft === 0) {
            setCooldown(false);
        }
        return () => clearTimeout(timer);
    }, [cooldown, secondsLeft]);



    return (
        <div className="mainpage">
            <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
                <BackgroundImage url="/minimal_body_5.png" >
                    <div className="page-content">
                        <div >
                            <img src="/minimal_body_logo.png" alt="minimal body Logo" className="logo" />
                        </div>

                    </div>

                </BackgroundImage>
            </div>
            <div className="image-container">
                <BackgroundImage url="minimal_body_3.png">
                    <div className="page-content">
                        <h1>📲 להרשמה
                        </h1>
                        <form className="contact-form" onSubmit={handleSubmit} >
                            <div className="segment">
                                <label>שם:</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                            </div>
                            <div className="segment">
                                <label>דואר אלקטרוני:</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="segment">
                                <label>מספר טלפון:</label>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                            </div>
                            <div className="segment">
                                <button type="submit" disabled={cooldown}>
                                    {cooldown ? `חכו ${secondsLeft} שניות...` : 'לחצו להרשמה'}
                                </button>

                            </div>
                        </form>
                    </div>
                </BackgroundImage>
            </div>
            <div className="image-container">
                <BackgroundImage url="/minimal_body_1.png">
                    <div className="sub-page">
                        <h1>המנויים שלנו</h1>

                        <div className="sub-card">
                            <h1>Dual Access</h1>
                            <h2>מנוי לשני אימונים שבועיים</h2>
                            <p>379 ש"ח</p>
                        </div>
                        <div className="sub-card">
                            <h1>Pro</h1>
                            <h2>3 אימונים שבועיים</h2>
                            <p>439 ש"ח</p>
                        </div>
                        <div className="sub-card">
                            <h1>Unlimited</h1>
                            <h2>מנוי ללא הגבלת כניסה</h2>
                            <p>599 ש"ח</p>
                        </div>
                        <div className="sub-card">
                            <h1>NEXTGEN</h1>
                            <h2>מנוי לשני אימונים שבועיים עבור בני נוער</h2>
                            <p>379 ש"ח</p>
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
        </div >


    );


}


export default HomePage;