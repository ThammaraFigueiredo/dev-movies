import Button from "../../components/Button";
import Slider from "../../components/Slider";
import api from "../../services/api";
import { getImages } from "../../services/utils/getimages";
import { Background, Container, ContainerButtons, Info, Quadro  } from "./styles";
import { useState, useEffect } from "react";

function Home() {
  const [discover, setDiscover] = useState()
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries ] = useState()
  const [popularSeries, setPopularSeries ] = useState()


  useEffect(() => {

    async function getDiscover() {
      const { 
        data: {results} 
      } = await api.get("/discover/movie");
  
      setDiscover(results)
    }

    async function getMovies() {
      const { 
        data: {results} 
      } = await api.get("/movie/popular");
  
      setMovie(results[2])
     
    }

   
      async function getTopMovies() {
        const { 
          data: {results} 
        } = await api.get("/movie/top_rated");

          console.log(results)
        setTopMovies(results)
       
      }

      async function getTopSeries() {
        const { 
          data: {results} 
        } = await api.get("/tv/top_rated");

          console.log(results)
        setTopSeries(results)
       
      }

      async function getPopularSeries() {
        const { 
          data: {results} 
        } = await api.get("/tv/popular")

          console.log(results)
        setPopularSeries(results)
       
      }
  
    getDiscover()
    getMovies()
    getTopMovies()
    getTopSeries()
    getPopularSeries()
  }, [])
  
  return (
    <>
      {movie && (
        <Background img={ getImages(movie.backdrop_path)}>
          
          <Container>
         <Info>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ContainerButtons>
            <Button pink={true}>Assista Agora</Button>
            <Button pink={false}>Assista o Trailer</Button>
          </ContainerButtons>
          </Info>
          <Quadro>
            <img alt='capa-do-filme' src={ getImages(movie.poster_path)}/>
          </Quadro>
          </Container>
        </Background>
      )}
      {discover && < Slider info={discover}  title={'Minha Lista'}/>}
      {topMovies && < Slider info={topMovies}  title={'Brasil: Filmes Top Treding'}/>}
      {topSeries && < Slider info={topSeries}  title={'Brasil: Séries Top Treding'}/>}
      {popularSeries && < Slider info={popularSeries}  title={'As Séries queridinhas do momento'}/>}
    </>
  )
}

export default Home
