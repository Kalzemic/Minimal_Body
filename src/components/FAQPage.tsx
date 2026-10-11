import { useState } from "react";
import "../styles/FAQPage.css";

const questions = [
    {
        question: "זה חדר כושר או שיעורי קבוצה?",
        answer: "שילוב של השניים – קבוצות של עד 10 מתאמנים, כשכל אחד עובד על תוכנית אישית בליווי מאמן.",
    },
    {
        question: "יש אירובי?",
        answer: "כן, יש אופני ספינינג מקצועיים. הדגש שלנו הוא על אימוני כוח בשילוב אינטרוולים.",
    },
    {
        question: "איך עובדת הגישה 24/7?",
        answer: "דרך האפליקציה שלנו, שמאפשרת לפתוח את דלת הסטודיו בכל שעה.",
    },
    {
        question: "אתם עוזרים גם בתזונה?",
        answer: "כן, ניתן לשלב בניית תפריט אישי ומדידות היקפים.",
    },
    {
        question: "איפה אתם נמצאים?",
        answer: 'מרינה מול אשקלון, קומה 2, ליד מסעדת "המרסה".',
    },
];

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page" dir="rtl">
            <div className="faq-container">
                <div className="faq-video-container">
                    <video
                        className="faq-video"
                        src="/faq/faq_video.mp4"
                        poster="/minimal_body_logo.png"
                        controls
                        playsInline
                        preload="metadata"
                    />
                </div>

                <div className="faq-content">
                    <h2 className="faq-title">שאלות נפוצות<span>.</span></h2>

                    <div className="faq-list">
                        {questions.map((item, index) => (
                            <div
                                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                                key={index}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleQuestion(index)}
                                    aria-expanded={activeIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span>{item.question}</span>
                                    <span className="faq-icon" aria-hidden="true">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    className="faq-answer"
                                    inert={activeIndex !== index}
                                >
                                    <div className="faq-answer-inner">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}