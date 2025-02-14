// Header.jsx


// IMPORTIAMO NAVBAR
import Navbar from "./Navbar";

// ESPORTO FUNZIONE HEADER
export default function Header(props) {




    return (
        <header>

            <figure>
                <img src="./img/dc-logo.png" alt="Logo" />
            </figure>


            <Navbar links={props.links} />
        </header>
    );
}