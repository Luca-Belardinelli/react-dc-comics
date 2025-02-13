// Header.jsx


// IMPORTIAMO NAVBAR
import Navbar from "./Navbar";

// ESPORTO FUNZIONE HEADER
export default function Header(props) {


    const { link } = props;


    return (
        <header>

            <figure>
                <img src="./img/dc-logo.png" alt="Logo" />
            </figure>


            <Navbar link={link} />
        </header>
    );
}