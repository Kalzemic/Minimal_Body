import './Page.css'
import './ContactPage.css'
import { useState } from 'react';
import BackgroundImage from './BackgroundImage';


const ContactPage = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")



    return (
        <div className="image-container">
            <BackgroundImage url="minimal_body_3.png">
                <div className="page-content">
                    <h1>📲 רוצים לשמוע עוד? צרו איתנו קשר עוד היום!
                    </h1>
                    <form className="contact-form" >
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
                            <button type="submit" >לחצו להרשמה</button>
                        </div>
                    </form>
                </div>
            </BackgroundImage>
        </div>
    );
}

export default ContactPage;