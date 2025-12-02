
import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";
//import MovieCard from './components/MovieCard'

function App() { //a component, retuns some kind of jsx code

  return (
   /* //this is a fragment. an empty tag that wraps these component
    <> 
    <Text display="Whats up"/>
    <Text display="Hello" />
    </>
 //for it to be jsx, needs to have some kind of parent element
  )
}

function Text({display}){ //props in the curly braces to pass values to the function
  return <div><p>{display}</p></div>
  //good for reusing code 
  <>
   {movieNumber == 1 && <MovieCard movie={{ title: "joe's Film", release_date: "2023" }} />}

  </>
  */
 <MovieProvider>
  <NavBar />
<main className = "main-content">
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/favorites" element={<Favorites/>}/>
  </Routes>
</main>
 </MovieProvider>
  );
}
export default App
