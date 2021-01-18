import React, {useState} from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div
    `
    background-color:#424242;
    color: white;
    width: 100%;
    margin: 8.5px;
    border-radius: 10px;
    padding: 10px;
    div{
        padding-left: 20px;
        font-weight: bold;
    }
    `
const StyledInput = styled.input
    `
    background-color:#424242;
    margin:10px;
    width: 90%;
    height: 50px;
    font-size: 50px;
    color: white;
    border: none;
    outline: none;
    border-bottom: solid 3px #000000;
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
