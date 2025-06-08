import { useState } from 'react';
import BackgroundImage from './BackgroundImage';
import './Page.css'
import './Subscriptions.css'
import { useScrollReveal } from '../hooks/UseScrollReveal';

const Subscriptions: React.FC = () => {
    const [plan, setPlan] = useState("ק")
    const WhatsappLink = "https://wa.me/972525772886?text=";
    useScrollReveal();
    return (

        <div className="image-container">
            <BackgroundImage url="/minimal_body_1.png">
                <div className="sub-page scroll-reveal">
                    <h1>המנויים שלנו</h1>

                    <div className="sub-card">
                        <h1>Dual Access</h1>
                        <div className="price">
                            <h1>379 ש"ח</h1>
                            <h3>\לחודש</h3>
                        </div>
                        <h2>מנוי לשני אימונים שבועיים</h2>
                        <div className="page-button">

                            <button aria-label="קישור לואצאפ עם מאמן" onClick={() => { setPlan("שלום, אני מעוניין להצטרף עם מנוי עבור שני אימונים שבועיים בעלות 379 שקלים"); window.open(WhatsappLink + encodeURIComponent(plan), "_blank") }}> לבחירה לחצו כאן</button>
                        </div>
                    </div>
                    <div className="sub-card">
                        <h1>Pro</h1>
                        <h2>3 אימונים שבועיים</h2>
                        <div className="price">
                            <h1>439 ש"ח</h1>
                            <h3>\לחודש</h3>
                        </div>
                        <div className="page-button">

                            <button aria-label="קישור לואצאפ עם מאמן" onClick={() => { setPlan("שלום, אני מעוניין להצטרף  עם מנוי עבור שלושה אימונים שבועיים בעלות 439 שקלים"); window.open(WhatsappLink + encodeURIComponent(plan), "_blank") }}> לבחירה  לחצו כאן</button>
                        </div>
                    </div>
                    <div className="sub-card">
                        <h1>Unlimited</h1>
                        <h2>מנוי ללא הגבלת כניסה</h2>
                        <div className="price">
                            <h1>599 ש"ח</h1>
                            <h3>\לחודש</h3>
                        </div>
                        <div className="page-button {}">

                            <button aria-label="קישור לואצאפ עם מאמן" onClick={() => { setPlan("שלום, אני מעוניין להצטרף  עם מנוי ללא הגבלה בעלות 599 שקלים"); window.open(WhatsappLink + encodeURIComponent(plan), "_blank") }}> לבחירה לחצו כאן</button>
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

                            <button aria-label="קישור לואצאפ עם מאמן" onClick={() => { setPlan("שלום, אני מעוניין להצטרף  עם מנוי לנוער בעלות 379 שקלים"); window.open(WhatsappLink + encodeURIComponent(plan), "_blank") }}> לבחירה לחצו כאן</button>
                        </div>
                    </div>

                </div>
            </BackgroundImage >
        </div >

    );
}


export default Subscriptions;