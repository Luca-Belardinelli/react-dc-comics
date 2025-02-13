

export default function Navbar(props) {
    // const links = props.link;

    return (
        <nav>
            <ul>
                {links.map((link) => (
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