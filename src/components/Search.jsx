import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Search = ({setFilteredProducts}) => {
    const [query,setQuery] = useState('');
    const products = useSelector(state=>state.products.items);

    const handleSearch = (e) =>{
        const value = e.target.value.toLowerCase();
        setQuery(value);

    const filtered = products.filter(product=>
        product.tilte.toLowerCase().includes(value)||
        product.category.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
    }
  return (
    <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
    <input 
      type="text" 
      className="form-control me-2" 
      placeholder="Search by name or category..." 
      value={query} 
      onChange={handleSearch} 
    />
    <button className="btn btn-outline-light" type="submit">Search</button>
  </form>
  )
}

export default Search