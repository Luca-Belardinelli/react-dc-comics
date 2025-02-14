

export default function Navbar(props) {


    return (
        <nav>
            <ul>
                {props.links.map((link) => (
                    <li key={link.id}>
                        <a href={link.url} className={link.current ? 'active' : ''}>
                            {link.text}
                        </a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )

}