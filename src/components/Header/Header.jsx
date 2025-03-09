/* Import lakes image and styles from Header folder */
import reactImg from '../../assets/lakes-logo.png';
import './Header.css';

/* Export the Header component so it can be displayed in the root file (App.jsx) */
export default function Header() {
    return (
        <header>
          <img src={reactImg} alt="Stylized atom"/>
          <h1>SUP Information App (Practice React)</h1>
          <p>Different Lakes, Paddleboards and Weather Information.</p>
        </header>     
    )
}