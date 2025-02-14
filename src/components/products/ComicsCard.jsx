

export default function ComicsCard(props) {
    return (
        <div className="comics">
            <img src={props.comicsThumb} alt={""} />
            <h3>{props.comicsSeries}</h3>
        </div>
    )
}