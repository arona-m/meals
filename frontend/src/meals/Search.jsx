import { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const { setSearchTerm, fetchRandomMeal, favorites } = useGlobalContext()
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      setSearchTerm(text)
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit} className='form-inline'>
        <div className="d-flex mt-4">
          <div className="form-group col-4">
            <input
              type='text'
              onChange={handleChange}
              value={text}
              placeholder='Search a meal'
              className='form-control'
            />
          </div>
          <button type="submit" className="btn btn-danger mx-2">search</button>
          <button type="btn" className="btn btn-outline-danger" onClick={handleRandomMeal}>Random Meal</button>
          <br />
      <div>
      </div>
        </div>
      </form>
    </header>
  )
}

export default Search