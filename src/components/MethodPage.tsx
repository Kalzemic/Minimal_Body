import BackgroundImage from "./BackgroundImage";
import './Page.css'


const MethodPage: React.FC = () => {
    return (
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
    );
};

export default MethodPage;
