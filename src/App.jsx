import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import PopularMovies from "./components/PopularMovies"
import LatestMovies from "./components/LatestMovies"
import Recommend from "./components/Recommend"
import FavouriteMovies from "./components/FavouriteMovies"
import Categories from "./components/Categories"
import Reviews from "./components/Reviews"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <PopularMovies/>
      <FavouriteMovies/>
      <LatestMovies/>
      <Recommend/>
      <Categories/>
      <Reviews/>
      <ContactUs/>
      <Footer/>

    </>
  )
}

export default App
