import { useState } from "react"
import { CityItem } from "../../components/CitiesComponents/CityItem"


const CitiesPage = () => {
    const INITIAL_CITIES = [
        {
        name: 'Vilnius',
        population: 600000,
        location: {
            continent: 'Europe',
            country: 'Lithuania'
        },
        touristAttractions: ['TV tower', 'Gedeminas Tower', 'Old town'],
        isCapital: true,
        },
        {
        name: 'Tokyo',
        population: 14094034,
        location: {
            continent: 'Asia',
            country: 'Japan'
        },
        touristAttractions: ['Tokyo tower', 'Yoyogi National Gymnasium', 'Sunshine'],
        isCapital: true,
        },

        {
        name: 'New York',
        population: 8804190,
        location: {
            continent: 'North America',
            country: 'United States'
        },
        touristAttractions: ['Statue of Liberty', 'Times Square', 'Central Park', 'Unisphere'],
        isCapital: false,
        },
        {
        name: 'Berlin',
        population: 3755251,
        location: {
            continent: 'Europe',
            country: 'Germany'
        },
        touristAttractions: ['Victoria Column', 'Reichstag', 'Berlin Cathedral'],
        isCapital: true,
        },
        {
        name: 'Paris',
        population: 2102650,
        location: {
            continent: 'Europe',
            country: 'France'
        },
        touristAttractions: ['Eiffel Tower', 'Pantheon', 'Arc de Tromphe', 'The Louvre'],
        isCapital: true,
        },
        {
        name: 'Liepaja',
        population: 78144,
        location: {
            continent: 'Europe',
            country: 'Latvia'
        },
        touristAttractions: ['Sea shore', 'Liepāja okupāciju režīmos', 'Karosta'],
        isCapital: false,
        },
        {
        name: 'Budva',
        population: 13338,
        location: {
            continent: 'Europe',
            country: 'Montenegro'
        },
        touristAttractions: ['Old town churches', 'Old town at night'],
        isCapital: false,
        },



    ]

    const [cities, setCities] = useState(INITIAL_CITIES)
    const [name, setName] = useState('')
    const [population, setPopulation] = useState('')
    const [country, setCountry] = useState('')
    const [continent, setContinent] = useState('')
    const [touristAttractions, setTouristAttractions] = useState('')
    const [isCapital, setIsCapital] = useState(false)

    const nameHandler = event => setName(event.target.value)
    const populationHandler = event => setPopulation(Number(event.target.value))
    const countryHandler = event => setCountry(event.target.value)
    const continentHandler = event => setContinent(event.target.value)
    const touristAttractionsHandler = event => setTouristAttractions(event.target.value)
    const isCapitalHandler = event => setIsCapital(event.target.checked)

    const touristAttractionsArr = touristAttractions.trim().length > 0 ? touristAttractions.split(',').map(attraction => attraction.trim()) : []

    const newCityHandler = event => {
        event.preventDefault()

        const newCity = {
        name,
        population,
        location: {
            continent,
            country,
        }, 
        touristAttractions: touristAttractionsArr,
        isCapital
        }

        setCities(prevState => [newCity, ...prevState])

        setName('')
        setPopulation(0)
        setCountry('')
        setContinent('')
        setTouristAttractions('')
        setIsCapital(false)
    }

    return (
    <div>
        <form onSubmit={newCityHandler}>
            <div className="form-control">
                <label htmlFor="name">City name:</label>
                <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
            </div>
            <div className="form-control">
                <label htmlFor="population">Population:</label>
                <input type="number" name="population" id="population" value={population} onChange={populationHandler} />
            </div>
            <div className="form-control">
                <label htmlFor="capital">City capital:</label>
                <input type="text" name="capital" id="capital" value={country} onChange={countryHandler} />
            </div>
            <div className="form-control">
                <label htmlFor="continent">City continent:</label>
                <input type="text" name="continent" id="continent" value={continent} onChange={continentHandler} />
            </div>
            <div className="form-control">
                <label htmlFor="tourists-attractions">Tourists attractions:</label>
                <input type="textarea" name="tourists-attractions" id="tourists-attractions" value={touristAttractions} onChange={touristAttractionsHandler} />
            </div>
            <div className="form-control">
                <label htmlFor="is-capital">Capital:</label>
                <input type="checkbox" name="is-capital" id="is-capital" checked={isCapital} onChange={isCapitalHandler} value='Is Capital'/>
            </div>

            <button type="submit">Add New City</button>
        </form>

        <div className="cities-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {cities.map((city, index) => <CityItem key={index} data={city} index={index} listLength={cities.length} />)}
        </div>
    </div>
    )
}

export default CitiesPage