function Cities(){
    const cities=["Hyderabad","Guntur","Chennai"]
    const listItems=cities.map(city=>(<li>{city}</li>))
    return(
<>
<h1>Popular cities</h1>
<p>Cities </p>
<p>firstCite:{cities[0]}</p>
<p>
    lastcite:{cities[cities.length-1]}
</p>
<p>
citelength:{cities.length}
</p>
<ul> {listItems}</ul>
</>
    )
}
export default Cities;