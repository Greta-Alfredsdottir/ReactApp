import { Header } from './components/header/header'
import { Navbar } from './components/navbar/navbar'
import { Button } from './components/button/button'
import { Body } from './components/body/body'
import { Footer } from './components/footer/footer'

 function App() {
   
 // Dette er den hurtigeste måde at skrive HTML på
  return (
    <>
      <Header />
      <Navbar />
      <Body />
      <Button /> 
      <Footer />
    </>
  )
}

export default App
