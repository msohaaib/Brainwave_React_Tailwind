import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './componenets/Benefits'
import Collaboration from './componenets/Collaboration'
import Footer from './componenets/Footer'
import Header from './componenets/Header'
import Hero from './componenets/Hero'
import Pricing from './componenets/Pricing'
import Roadmap from './componenets/Roadmap'
// import Services from './componenets/Services'
function App() {
  return (
    <>      
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Header />
      <Hero />
      <Benefits />
      </div>
      <ButtonGradient />
      <Collaboration />
      {/* <Services /> */}
      <Pricing />
      <Roadmap />
      <Footer />
    </>
  )
}

export default App
