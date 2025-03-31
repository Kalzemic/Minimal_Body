import BackgroundImage from "./BackgroundImage";


const HomePage: React.FC = () => {
    return (
        <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
            <BackgroundImage url="/minimal_body_5.png" >
                <div className="page-content">

                </div>
            </BackgroundImage>

        </div>

    );


}


export default HomePage;