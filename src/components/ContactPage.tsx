import { useEffect, useState } from "react";
import "../styles/ContactPage.css";

const WEBHOOK_URL =
    "https://hooks.zapier.com/hooks/catch/22391451/20u3p6w/";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [submitting, setSubmitting] = useState(false);
    const [cooldown, setCooldown] = useState(0);
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (cooldown === 0) return;

        const timer = window.setTimeout(() => {
            setCooldown((prev) => prev - 1);
        }, 1000);

        return () => window.clearTimeout(timer);
    }, [cooldown]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (submitting || cooldown > 0) return;

        setSubmitting(true);
        setStatus("");

        try {
            await fetch(WEBHOOK_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                }),
            });

            // no-cors doesn't expose Zapier's response.
            // This confirms only that fetch completed.
            setStatus("הבקשה נשלחה. תודה!");
            setCooldown(60);

            setName("");
            setPhone("");
            setEmail("");
        } catch (error) {
            console.error("Contact form error:", error);
            setStatus("אירעה שגיאה בשליחה. נסו שוב.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-page" dir="rtl">
            <div className="contact-overlay" />

            <div className="contact-container">
                <header className="contact-header">
                    <h2>
                        מתחילים כאן<span>.</span>
                    </h2>
                    <p>משאירים פרטים ואנחנו חוזרים אליכם</p>
                </header>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-field">
                        <label htmlFor="contact-name">שם מלא</label>
                        <input
                            id="contact-name"
                            type="text"
                            placeholder="השם שלך"
                            autoComplete="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="contact-field">
                        <label htmlFor="contact-phone">טלפון</label>
                        <input
                            id="contact-phone"
                            type="tel"
                            placeholder="050-000-0000"
                            autoComplete="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="contact-field">
                        <label htmlFor="contact-email">אימייל</label>
                        <input
                            id="contact-email"
                            type="email"
                            placeholder="example@email.com"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        className="contact-submit"
                        type="submit"
                        disabled={submitting || cooldown > 0}
                    >
                        {submitting
                            ? "שולח..."
                            : cooldown > 0
                              ? `ניתן לשלוח שוב בעוד ${cooldown} שניות`
                              : "קביעת אימון היכרות ←"}
                    </button>

                    {status && (
                        <p className="contact-status" role="status">
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}