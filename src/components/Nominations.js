import React from 'react'
import styled from 'styled-components'
import NominationItem from './NominationItem.js'

const StyledDiv = styled.div
    `
    background-color:#424242;
    color: white;
    width: 45%; 
    height: 500px;
    border: solid 1px #E0E0E0;
    margin-left:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    transition: 0.5s ease-in-out;
    header{
        font-size: 20px;
        font-weight: 600;

    }
    `
    const StyledDivTwo = styled.div
    `
    background-color:#424242;
    color: white;
    width:95%; 
    height: 400px;
    margin-left:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    `

    const StyledStars = styled.div
     `
     width: 90%;
     text-align: center;
     background-color: #9575CD;
     padding: 10px;
     font-size: 20px;
     letter-spacing: 10px;
     border: solid 1px gold;
     border-radius: 5px;
     color: gold;
     transition: 0.5s ease-in-out;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
     transition: 0.5s ease-in-out;
     `


const Nomination = (props) => {
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
            {props.nominations.length === 5 ?
                <StyledStars>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <div>NOMINATIONS COMPLETE</div>
                </StyledStars>: false}
            <header>Nominations</header>
            <StyledDivTwo>
            {renderNominations()}
            </StyledDivTwo>
        </StyledDiv>
    )
}

export default Nomination