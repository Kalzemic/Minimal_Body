import ContactPage from "./ContactPage";
import Subscriptions from "./Subscriptions";
import HeroPage from "./HeroPage";
import FAQPage from "./FAQPage";
// import WhyUsPage from "./WhyUsPage";
import MethodPage from "./MethodPage";
// import Footer from "./Footer";
import Footer from "./Footer";

import { useScrollReveal } from "../hooks/UseScrollReveal";

import "../styles/HomePage.css";
import WhyUsPage from "./WhyUsPage";

export default function HomePage() {
    useScrollReveal();

    return (
        <main className="mainpage">
            <section id="home" className="hero">
                <HeroPage />
            </section>

            <section id="signup">
                <ContactPage />
            </section>

            <section id="subscriptions">
                <Subscriptions />
            </section>

            <section id="faq">
                <FAQPage />
            </section>

            <section id="why_us">
                <WhyUsPage />
            </section>

            <section id="method">
                <MethodPage />
            </section>

            <Footer/>
        </main>
    );
}