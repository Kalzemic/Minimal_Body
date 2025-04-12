import BackgroundImage from './BackgroundImage';
import './Page.css'
import './Subscriptions.css'

const Subscriptions: React.FC = () => {
    return (

        <div className="image-container">
            <BackgroundImage url="/minimal_body_2.png">
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

    );
}


export default Subscriptions;