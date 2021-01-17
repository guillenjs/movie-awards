import React from 'react'
import styled from 'styled-components'
import NominationItem from './NominationItem.js'

const StyledDiv = styled.div
    `
    background-color: white;
    width: 45%; 
    height: 300px;
    border: solid 1px pink;
    margin-left:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `



const Nomination = (props) => {
console.log(props.nominations.length)
    const renderNominations = () => {
        if (props.nominations.length)
        {
            return props.nominations.map(movie => <NominationItem key={movie.imdbID} movie = {movie} removeNomination = {props.removeNomination}/>)
        }
        else
        {
            return <div>No nomiations yet</div>
        }
        
    }

    return (
        <StyledDiv>
            {renderNominations()}
        </StyledDiv>
    )
}

export default Nomination