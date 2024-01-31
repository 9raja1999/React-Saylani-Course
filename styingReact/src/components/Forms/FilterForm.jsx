import React from 'react'

function FilterForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit} className='filterForm'>
        <input type='text' placeholder='Min Price' />
        <input type='text' placeholder='Max Price' />
        <button>Search</button>
    </form>
  )
}

export default FilterForm