import './timeline.css'
import data from '../data'

const startingYear = 1976
let currentYear=1976
const endYear = 2021
const years =[]
for (let i=0; i<=45;i++){
    years[i]=currentYear
    currentYear++
}

function Timeline(){
    return(
        <div className="line-container">
            <div className="timeline-bar">
                {years.map(year => <div className="timeline-year">{year}</div>)}
            </div>
            <div className="info-container">
                {data.map(year => <ul className="cards-container">{year.map(info => <li className="card">
                     <div className="card-border"></div> 
                     <div className="card-title">{info.title}</div>
                     <p className="card-body">{info.body}</p>
                     </li>)}</ul>)}
            </div>
        </div>
    )
}

function createCard(title,body){
    return(
        <li className="card">
                <div className="card-border"></div>
                <div className="card-title">{title}</div>
                <p className="card-body"> {body}</p>
            </li>
    )
}

function y1976(){
    return(
        <ul className="cards-container">
            {createCard("La recuperación de la democracia","La derrota en la guerra de las Malvinas obligó al régimen militar a convocar a elecciones democráticas en 1983 sin poder imponer condiciones. Las dos primeras décadas estuvieron marcadas por la recuperación de la democracia el año en que se inicia el período, el enjuiciamiento a los culpables de violaciones a los derechos humanos durante la dictadura anterior —rasgo que distingue la democracia argentina de las demás democracias recuperadas en Sudamérica—, la crisis de la deuda externa, el inicio de la globalización, las reformas neoliberales y la severa recesión económica iniciada en 1998 que terminó con la crisis generalizada de 2001/2002. El período abarca la primera vez en la historia argentina de dos décadas continuadas bajo régimen democrático y la primera vez en que presidentes democráticos entregan el poder a sucesores de otro partido político elegidos democráticamente.En este período Argentina protagonizará también un importante cambio político y económico, al fundar el Mercosur junto a Brasil, Paraguay y Uruguay.")}
        </ul>
    )
}
function y1977(){
    <ul className="cards-container">
    </ul>
}
function y1978(){
    <ul className="cards-container">

    </ul>
}
function y1979(){
    <ul className="cards-container">

    </ul>
}
function y1980(){
    <ul className="cards-container">

    </ul>
}
function y1981(){
    <ul className="cards-container">

    </ul>
}
function y1982(){
    <ul className="cards-container">

    </ul>
}
function y1983(){
    <ul className="cards-container">

    </ul>
}
function y1984(){
    <ul className="cards-container">

    </ul>
}
function y1985(){
    <ul className="cards-container">

    </ul>
}
function y1986(){
    <ul className="cards-container">

    </ul>
}
function y1987(){
    <ul className="cards-container">

    </ul>
}
function y1988(){
    <ul className="cards-container">
        {createCard("Hiperinflación","La situación económica se reagravó en 1988 que terminó con una tasa de inflación de 343 %, preludio del estallido de un proceso hiperinflacionario a partir de febrero de 1989 superior al 3000 % anual, que hizo aumentar la pobreza hasta alcanzar un récord histórico hasta entonces: 47,3 %.En esas condiciones se realizaron las elecciones presidenciales del 14 de mayo de 1989, triunfando el candidato opositor, el peronista Carlos Menem con un 47,4 % de los votos, contra el 36,7 % de la UCR. La magnitud del caos económico-social, llevó a Alfonsín a «resignar» al cargo de presidente y anticipar cinco meses el traslado del mando al 8 de julio. ")}
    </ul>
}
function y1989(){
    <ul className="cards-container">

    </ul>
}

function y1990(){
    <ul className="cards-container">
        
    </ul>
}
function y1991(){
    <ul className="cards-container">
        
    </ul>
}
function y1992(){
    <ul className="cards-container">
        
    </ul>
}
function y1993(){
    <ul className="cards-container">
        
    </ul>
}
function y1994(){
    <ul className="cards-container">
        
    </ul>
}
function y1995(){
    <ul className="cards-container">
        
    </ul>
}
function y1996(){
    <ul className="cards-container">
        
    </ul>
}
function y1997(){
    <ul className="cards-container">
        
    </ul>
}
function y1998(){
    <ul className="cards-container">
        
    </ul>
}
function y1999(){
    <ul className="cards-container">
        
    </ul>
}
function y2000(){
    <ul className="cards-container">
        
    </ul>
}


export default Timeline