import './timeline.css'
import data from '../data'

let currentYear=1976
const years =[]
for (let i=0; i<=45;i++){
    years[i]=currentYear
    currentYear++
}

function Timeline(){

    function showCurrentBody(event){
        const target=event.currentTarget.lastChild
        target.classList.toggle("show-body")
    }
    return(
        <div className="line-container">
            <div className="timeline-bar">
                {years.map(year => <div key={year} className="timeline-year">{year}</div>)}
            </div>
            <div className="info-container">
                {data.map(year => <ul key={`${year[0].title}${year[0].year}`} className="cards-container">{year.map(info => <li key={info.title} className={info.title ==="" ? "card noshow" : "card"} onClick={showCurrentBody}>
                     <div className="card-title">{info.title}</div>
                     {showBody(info.title,info.body)}
                     </li>)}</ul>)}
            </div>
        </div>
    )
}

function showBody(title,text){
    return(
        <div className="card-body">
            <p className="close-body">X</p>
            <h2 className="body-title">{title}</h2>
            <p className="body-text">{text}</p>
        </div>
    )
}


export default Timeline