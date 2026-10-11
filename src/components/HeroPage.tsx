import "../styles/HeroPage.css";

export default function HeroPage() {
    const WhatsappLink = "https://wa.me/972509333767";

    return (
        <div className="hero-content" dir="rtl">
            <h1 className="hero-brand">
                <img
                    src="/minimal_body_logo.png"
                    alt="Minimal Body"
                    className="hero-logo"
                />
            </h1>

            <p className="hero-tagline">
                פחות עומס. יותר תוצאות.
            </p>

            <a
                className="hero-cta"
                href={WhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                קביעת אימון היכרות
                <span aria-hidden="true">←</span>
            </a>
        </div>
    );
}