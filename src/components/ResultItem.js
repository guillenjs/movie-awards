import { render } from '@testing-library/react'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import css from 'styled-components'



const StyledCont = styled.div
    `
    border-radius: 10px;
    width:80%;
    height: 50px;
    border: solid 1px #BB86FC;
    border-radius;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin: 5px; 
    `
    const StyledContTwo = styled.div  
    `
        display: flex;
        alignt-items: center;
        justify-content: center;
        flex-direction: column;
    ` 
const Button = styled.button
 `
    border:none;
    outline: none;
    height:100%;
    width:50px;
    border-radius: 50px;
    font-size: 20px;
    color: grey;
    transition: 0.5s ease-in-out;
 `
const ResultItem = (props) => {
    const [active, setActive] = useState(null)
    const {Title, Year } = props.movie
   
    const checkNomination = () => {
       return props.nominations.forEach(movie => 
           { if (movie.imdbID === props.movie.imdbID){
                return setActive(true)
            }
            else
            {
                return setActive(false)
            }
        }
            )
    }

    useEffect(() => {
        checkNomination()
    },[active]
    )
    const activated = () => {
        setActive(true)
        props.handleNominations(props.movie)
    }


    return(
        <StyledCont>
            <StyledContTwo >
            <div><b>{Title}</b></div>
            <div>Released: {Year}</div>
            </StyledContTwo>
            <Button  disabled={active}  onClick={activated} ><i class="fa fa-plus"></i></Button>
        </StyledCont>
    )
}

export default ResultItem 