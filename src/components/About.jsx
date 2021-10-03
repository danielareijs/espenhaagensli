import aboutImg from '../images/about.webp';
import '../css/about.css';

const About = () => {
    return (
        <div className="about-section" id="about">
            <div className="about-image" style={{backgroundImage: `url(${aboutImg})`}}></div>
            <div className="about-info">
                <h2>ABOUT ESPEN HAAGENSLI</h2>
                <h3>A Life Steeped in Sound</h3>
                <p>Music has the power to transport us to another time and place. Espen Haagensli loves to harness that power with a broad audience of fellow music lovers and passionate musicians alike. Ever since a young age, Espen Haagensli has found great joy and satisfaction by being involved in the creative music process. Take a look around the site to get to know more about Espen Haagensli.</p>
            </div>
        </div>
    )
}

export default About
