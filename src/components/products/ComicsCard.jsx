

export default function ComicsCard(props) {
    return (
        <div>
            <img src={props.ComicsThumb} alt={props.comicsTitle} />
            <h3>{props.comicsTitle}</h3>
        </div>
    )
}