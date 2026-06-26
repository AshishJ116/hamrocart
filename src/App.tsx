import { ThemeProvider } from "@mui/material"
import { customTheme } from "./theme/customTheme"
import Products from "./customer/pages/Product/Products"
import Footer from "./customer/Footer/Footer"
import ProductDetails from "./customer/pages/Product/ProductDetails/ProductDetails"
import Home from "./customer/pages/Home/Home"
// import Home from "./customer/pages/Home/Home"


function App() {
 

  return (
    <ThemeProvider theme={customTheme}>

      <Home/>
      <Products/>
      <ProductDetails/>
      <Footer/>

    </ThemeProvider>
  )
}

export default App
