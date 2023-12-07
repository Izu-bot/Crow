import { Outlet } from "react-router-dom"

import Menu from "./assets/components/Menu"
import Footer from "./assets/components/Footer"

function App() {

  return (
    <>
    <div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
    </>
  )
}

export default App
