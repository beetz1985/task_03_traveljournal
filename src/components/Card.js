
function Card(props) {

    console.log(props.imageUrl);

    return (
        <section className="card">
            <div className="location-image">
                <img src={props.imageUrl} alt={props.title}/>    
            </div>
            
            <div className="card-text-area">
                <div className="location-row">
                    <img src="/location_icon.png" alt="location icon"/>
                    <div className="location">{props.location}</div>
                    <div className="g-maps-link">View On Google Maps</div>
                </div>
                <h1>{props.title}</h1>
                <div className="dates">{props.startDate} - {props.endDate}</div>
                <p>{props.description}</p>
            </div>
        </section>
    )
}

export default Card