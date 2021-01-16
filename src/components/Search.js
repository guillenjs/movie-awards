import React from 'react'
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

const Search = () => {
    return (
        <StyledDiv>
            <div>Movie Title</div>
            <StyledInput placeholder='Search'></StyledInput>
        </StyledDiv>
    )
}

export default Search
