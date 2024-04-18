import React, { useEffect, useState } from 'react'

const ChuckPage = () => {
    const [joke, setJoke] = useState('')
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectCategory] = useState('')
    const [phraseSelect, setPhraseSelect] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            const jokeRes = await fetch('https://api.chucknorris.io/jokes/random')
            const joke = await jokeRes.json()

            setJoke(joke.value)
            
            const categoriesRes = await fetch(`https://api.chucknorris.io/jokes/categories`)
            const categories = await categoriesRes.json()

            setCategories(categories)
            setSelectCategory(categories[0])

        }

        fetchData()
    }, [])

    const randomJokeHandler = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then (joke => {
                setJoke(joke.value)
            })
    }

    const categorySelectHandler = event => setSelectCategory(event.target.value)

    const categoryJokeHandler = async event => {
        event.preventDefault()

        const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
        const joke = await res.json()

        setJoke(joke.value)
    }
        
    const phraseSelectHandler = e => {
  
        setPhraseSelect(e.target.value)

    }
        
    const searchJokeHandler = (e) => {
        e.preventDefault()
        fetch(`https://api.chucknorris.io/jokes/search?query=${phraseSelect}`)
            .then(res => res.json())
            .then(joke => {
            setJoke(joke.result.total)
            const generatedJoke = joke['result'][Math.floor(Math.random() * (joke.total + 1))]
            setJoke(generatedJoke.value)
            })
    }

  return (
    <div>
        <button onClick={randomJokeHandler}>Get Random Joke</button>
        {joke && <p>{joke}</p>}

        <form onSubmit={categoryJokeHandler}>
            <label htmlFor='category' >Categories:</label>

            <select id='category' name='category' value={selectedCategory} onChange={categorySelectHandler}>

            {categories.map((category, index) => <option key={index} value={category}> {category}</option>)}
            </select>

            <button type='submit'>Get Joke </button>
        </form>

        <form onSubmit={searchJokeHandler}>
            <label htmlFor='search'>Search by phrase:</label>
            <input type='text' name='search' id='search' value={phraseSelect} onChange={phraseSelectHandler}></input>

            <button type='submit'>Get Joke</button>
        </form>
    </div>
  )
}

export default ChuckPage