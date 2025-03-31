
import "./BackgroundImage.css";


interface BackgroundImageProps {
    url: string;
    children?: React.ReactNode;
}
const BackgroundImage: React.FC<BackgroundImageProps> = ({ url, children }) => {
    return (
        <div className="background-image" style={{ backgroundImage: `url(${url})` }} >
            <div className="content">{children}</div>
        </div>
    );
}


export default BackgroundImage