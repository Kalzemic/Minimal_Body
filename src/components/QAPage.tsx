import BackgroundImage from "./BackgroundImage";



const QAPage: React.FC = () => {
    return (
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

    );
}


export default QAPage;