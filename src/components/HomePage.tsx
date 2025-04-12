import BackgroundImage from "./BackgroundImage";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Page.css'
const HomePage: React.FC = () => {

    const whatsappLink = "...";
    const InstaLink = "https://www.instagram.com/minimalbodyil/";


    return (
        <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
            <BackgroundImage url="/minimal_body_5.png" >
                <div className="page-content">
                    <div >
                        <img src="/minimal_body_logo.png" alt="minimal body Logo" className="logo" />
                    </div>
                    <div className="social-media">
                        <button className="Whatsapp-button"
                            onClick={() => window.open(whatsappLink, "_blank")}>

                            <FaWhatsapp className="whatsapp-icon" />
                        </button>
                        <button className="Instagram-button"
                            onClick={() => window.open(InstaLink, "_blank")}>

                            <FaInstagram className="Instagram-icon" />
                        </button>
                    </div>
                </div>

            </BackgroundImage>

        </div>

    );


}


export default HomePage;