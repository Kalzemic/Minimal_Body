import "../styles/MethodPage.css";

const steps = [
    {
        title: "אימון היכרות מותאם אישית",
        description: "כדי להבין את הצרכים והמטרות שלך."
    },
    {
        title: "שיבוץ לשעות קבועות",
        description: "מה שמסייע לך להתמיד ולראות תוצאות."
    },
    {
        title: "בניית תוכנית אימונים מדויקת",
        description: "המבוססת על שיטת Minimal Body, עם תרגילים שמשרתים אך ורק את המטרה שלך."
    },
    {
        title: "אימון של שעה בלבד",
        description: "עם מנוחה והתאוששות אופטימלית בין אימונים."
    },
    {
        title: "אין חובה לשלב אירובי",
        description: "אימוני כוח מדויקים יספיקו לתוצאות מעולות."
    }
];

export default function MethodPage() {
    return (
        <div className="method-page" dir="rtl">
            <div className="method-container">
                <header className="method-header">
                    <h2>
                        איך זה עובד<span>?</span>
                    </h2>
                </header>

                <div className="method-timeline">
                {steps.map((step, index) => (
                    <article className="method-step" key={index}>
                        <div className="method-marker">
                            <span>
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="method-step-content">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </article>
                ))}
                </div>
            </div>
        </div>
    );
}