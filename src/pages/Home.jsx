import React from 'react'
import HeroSectionLayout from '../feature/heroSection/HeroSectionLayout'
import WelComeSection from '../feature/welcomSection/WelComeSection'
import MenuSection from '../feature/menuSection/MenuSection'
import Menu from '../ui/Menu'
import { Provider } from 'react-redux'
import store from '../feat/store'
import { Toaster } from 'react-hot-toast'
import Offers from '../feature/offers/Offers'
import Footer from '../ui/Footer'
function Home() {
  return (
    <Provider store={store}>
    <div className="overflow-x-hidden overflow-y-hidden bg-red-50 bg-[url('./assets/images/home1-bg.png')]">
      <Toaster />
      <Menu/>
      <HeroSectionLayout />
      <WelComeSection/>
      <MenuSection/>
      <Offers/>
      <Footer/>
    </div>
    </Provider>
  )
}

export default Home