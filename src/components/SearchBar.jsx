import React from 'react'
import Wrapper from '../assets/wrappers/SearchBar'

export const SearchBar = ({value,handleSearchKey, clearSearch, formSubmit}) => {
    return (
        <Wrapper>
        <div className="searchBar-wrap">
            <form onSubmit={formSubmit}>
                <input
                type="text"
                placeholder="Search by category"
                value={value}
                onChange={handleSearchKey}
                />
                {value && <span onClick={clearSearch}>x</span>}
                <button>Go</button>
            </form>
        </div>
        </Wrapper>
 
    )
}

export default SearchBar