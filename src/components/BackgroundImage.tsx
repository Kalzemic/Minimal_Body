
import "./BackgroundImage.css";


interface BackgroundImageProps {
    url: string;
    children?: React.ReactNode;
}
const BackgroundImage: React.FC<BackgroundImageProps> = ({ url, children }) => {
    return (
        <div className="background-container">
            <div
                className="background-fixed"
                style={{ backgroundImage: `url(${url})` }}
            />
            <div className="background-content">{children}</div>
        </div>
    );
}


export default BackgroundImage