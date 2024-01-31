import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import StickToTop from "./components/SticktoTop/StickToTop"
import ProductListing from "./components/productsListing/ProductListing"

function App() {

  return (
    <>
      <StickToTop>
        <Header />
      </StickToTop>
      <Banner />
      <ProductListing />

    </>
  )
}

export default App
