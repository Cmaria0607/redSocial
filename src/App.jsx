import { Route, Routes } from "react-router-dom"
import UsersCompany from './Components/UsersCompany'
import Posts from "./Components/Posts"
import PostsCompany from "./Components/PostsCompany"
import AboutUs from "./Components/AboutUs"
import Nav from "./Components/Nav"
import User from "./Components/User"


function App() {
  return (
    <>
      <Nav />
      

      <Routes>
        <Route path="/UsersCompany" element={<UsersCompany />} />
        <Route path="/UsersCompany/:id" element={<User />} />
        <Route path="/PostsCompany" element={<PostsCompany />} />
        <Route path="/PostsCompany/:id" element={<Posts />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<h1 className="w-full h-screen text-center font-mono text-5xl font-bold">Page Not Found</h1>} />
      </Routes>

    </>
  )
}

export default App
