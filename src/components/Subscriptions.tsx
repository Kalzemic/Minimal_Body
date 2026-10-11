import "../styles/Subscriptions.css";

const subscriptions = [
    {
        name: "Limitless",
        commitment: "ללא התחייבות",
        description: "מנוי חודשי עם גמישות מלאה",
        coaching: true,
        message: "שלום, אני מעוניין בפרטים על מנוי Limitless",
    },
    {
        name: "Freedom",
        commitment: "6 חודשים",
        description: "מסגרת אימונים קבועה לחצי שנה",
        coaching: true,
        message: "שלום, אני מעוניין בפרטים על מנוי Freedom",
        featured: true,
    },
    {
        name: "Commit",
        commitment: "12 חודשים",
        description: "מסגרת אימונים לטווח ארוך",
        coaching: true,
        message: "שלום, אני מעוניין בפרטים על מנוי Commit",
    },
    {
        name: "Access Only",
        commitment: "גישה עצמאית",
        description: "למתאמנים מנוסים ללא ליווי מאמן",
        coaching: false,
        message: "שלום, אני מעוניין בפרטים על מנוי Access Only",
    },
];

export default function Subscriptions() {
    const whatsappNumber = "972525772886";

    return (
        <div className="subscriptions-page" dir="rtl">
            <div className="subscriptions-container">
                <header className="subscriptions-header">
                    <h2>
                        המסלול שלך<span>.</span>
                    </h2>
                    <p>בחרו את המסלול שמתאים לכם</p>
                </header>

                <div className="subscriptions-grid">
                    {subscriptions.map((sub) => (
                        <article
                            key={sub.name}
                            className={`subscription-card ${
                                sub.featured ? "subscription-featured" : ""
                            }`}
                        >
                            <div className="subscription-card-header">
                                <h3 dir="ltr">{sub.name}</h3>
                                <span className="subscription-commitment">
                                    {sub.commitment}
                                </span>
                            </div>

                            <p className="subscription-description">
                                {sub.description}
                            </p>

                            <div className="subscription-features">
                                <div>
                                    <span className="subscription-check">✓</span>
                                    מסגרת אימוני כוח
                                </div>

                                <div>
                                    <span className="subscription-check">✓</span>
                                    {sub.coaching
                                        ? "ליווי מאמן אישי"
                                        : "אימון עצמאי"}
                                </div>

                                {sub.coaching && (
                                    <div>
                                        <span className="subscription-check">✓</span>
                                        תוכנית אימונים אישית
                                    </div>
                                )}
                            </div>

                            <a
                                className="subscription-button"
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(sub.message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                לפרטים נוספים
                                <span aria-hidden="true">←</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}