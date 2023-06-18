import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "@app/Home"
import GlobalProvider from "@context/GlobalProvider"
import Nav from "@components/home/Nav"
import Footer from "@components/home/Footer"
import TermsAndConditions from "@components/home/footer/TermsAndConditions"
import ScrollToTop from "@context/ScrollToTop"

function App() {
  return (
    <div className='bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex items-center justify-center flex-col'>
      <Router>
        <GlobalProvider>
          <ScrollToTop />
          <Nav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/regulamin' element={<TermsAndConditions />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </Router>
    </div>
  )
}

export default App
