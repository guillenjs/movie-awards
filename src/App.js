import React, {useState} from 'react'
import styled from 'styled-components'
import Search from './components/Search.js'
import Results from './components/Results.js'
import Nominations from './components/Nominations.js'

const StyledDiv = styled.div
  `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5%;
  `

  const StyledDivTwo = styled.div
  `
  width:90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
 
  `

const StyledHeader = styled.header
  `
  width: 100%;
  padding-right:100px;
  margin-left:4%;
  color: #F3E5F5;
  font-size: 40px;
  text-align: center;
  text-shadow: 5px 5px black;
  font-weight: 600;
  i {
    color: gold;
  }
  `



function App() {

  const [searchTerm, setSearchaTerm] = useState('')
  const [nominations, setNominations] = useState([])
  const [searchItems, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const  API_KEY = process.env.REACT_APP_MOVIE_AWARDS_API_KEY

  const fetchItems = () => {
    if(searchTerm.length > 1){
      setLoading(true)
      fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
      .then(res=> res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })
    }
    else
    {
      setLoading(true)
      setItems([])
    }
  }


  const search = (search) => {
    setSearchaTerm(search)
    fetchItems(search)
  }

  const handleNominations = (nom) => {

    if(nominations.length < 5){
      setNominations([...nominations, nom])
    }
  }

  const removeNomination = (movie) => {
      console.log(movie)
      const newArr = nominations.filter( n => n.imdbID !== movie.imdbID)
      setNominations(newArr)
  }

  console.log(searchItems)
  console.log(nominations)


  return (
 
  <StyledDiv>
    <StyledDivTwo>
    <StyledHeader>T H E <div><i class="fa fa-trophy"></i></div>S H O P P I E S</StyledHeader>
      <Search search = {search}></Search>
      <Results 
        searchItems = {searchItems} 
        loading = {loading}
        handleNominations = {handleNominations}
        nominations = {nominations}
      />
      <Nominations nominations = {nominations} removeNomination = {removeNomination}/>
    </StyledDivTwo>
  </StyledDiv>

  );
}

export default App;
