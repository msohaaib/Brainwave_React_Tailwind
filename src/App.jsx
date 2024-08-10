import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './componenets/Benefits'
import Collaboration from './componenets/Collaboration'
import Header from './componenets/Header'
import Hero from './componenets/Hero'
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
    </>
  )
}

export default App
