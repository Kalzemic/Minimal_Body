import './Page.css'
import './ContactPage.css'
import { useEffect, useState } from 'react';
import BackgroundImage from './BackgroundImage';


const ContactPage = () => {
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

            if (response.ok) {
                setCooldown(true);
                setSecondsLeft(60);
                setName("");
                setEmail("");
                setPhone("");
            } else {
                console.error("Server responded with error:", await response.text());
                alert("שגיאה בשליחת הטופס (שרת החזיר שגיאה)");
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
        <div className="image-container">
            <BackgroundImage url="minimal_body_3.png">
                <div className="page-content">
                    <h1>📲 רוצים לשמוע עוד? צרו איתנו קשר עוד היום!
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
    );
}

export default ContactPage;