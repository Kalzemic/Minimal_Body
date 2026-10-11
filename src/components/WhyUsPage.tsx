import "../styles/WhyUsPage.css";

const benefits = [
    ["01", "אימוני כוח מדויק – בלי חוגים."],
    ["02", "תוכנית אימונים אישית באפליקציה."],
    ["03", "מאמן נוכח לאורך כל האימון."],
    ["04", "עד 12 מתאמנים בחלל"],
    ["05", "אימון ממוקד של עד שעה"],
];
export default function WhyUsPage() {
    return (
        <div className="whyus-page">
            <div className="whyus-container">
                <div className="whyus-heading">
                    <h2 lang="en">
                        WHY
                        <span> MINIMAL BODY?</span>
                    </h2>

                    <p>כל מה שצריך. בלי מה שלא.</p>
                </div>

                <div className="whyus-list" dir="rtl">
                    {benefits.map(([number, title]) => (
                        <div className="whyus-item" key={number}>
                            <span className="whyus-number">{number}</span>

                            <div className="whyus-item-text">
                                <h3>{title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}