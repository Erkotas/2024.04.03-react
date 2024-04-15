import TouristAttractions from "./TouristAtractions"

export const CityItem = (props) => {
  const { index, listLength } = props
  const {name, population, isCapital, location, touristAttractions } = props.data
  const {continent, country} = location
  const cityWidth = (index === listLength - 1 && index % 2 === 0) ? '100%' : '48%'

  let cityDescription = `${name} city is located in ${continent}, ${country} and has population of ${population} people.`
  let cityName = name
  let cityClass = ''
  
  if(isCapital)
    cityDescription += `${name} is the capital of ${country}.`
    cityName += ' (Capital)'
    cityClass = 'Capital'

    

  return (
    <div className={`city-item ${cityClass}`} style={{ width: cityWidth }}>
      <h2 className="city-name">{cityName}</h2>
      <p className="city-description">{cityDescription}</p>
     
      <TouristAttractions list={touristAttractions} name={name} />
    </div>
  )
}
