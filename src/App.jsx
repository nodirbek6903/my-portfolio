import { Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/Home/HomePage"
import AboutPage from "./pages/About/About"
import ProjectsPage from "./pages/Projects/Projects"
import ContactPage from "./pages/Contact/Contact"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
