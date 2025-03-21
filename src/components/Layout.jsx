import {Outlet} from "react-router-dom"
import Header from "./Layout/Header/Header"
import Footer from "./Layout/Footer/Footer"
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout