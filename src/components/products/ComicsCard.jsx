

export default function ComicsCard(props) {
    return (
        <div>
            <img src={props.ComicsThumb} alt={""} />
            <h3>{props.comicsSeries}</h3>
        </div>
    )
}