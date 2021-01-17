import React, {useState} from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div
    `
    background-color: white;
    width: 92%;
    border: solid 1px pink;
    margin: 8.5px;
    `
const StyledInput = styled.input
    `
    margin:10px;
    width: 90%;
    height: 30px;
    `

const Search = (props) => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        props.search(search)
    } 

    return (
        <StyledDiv>
            <div>Movie Title</div>
            <StyledInput placeholder='Search' value={search} onChange={handleSearch}></StyledInput>
        </StyledDiv>
    )
}

export default Search
