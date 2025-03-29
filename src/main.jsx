import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { loadingInfo } from "./components/Github/Github.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="/login"
        element={
          <UserContextProvider>
            <Login />
          </UserContextProvider>
        }
      />
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="user/*"
        element={
          <UserContextProvider>
            <User />
          </UserContextProvider>
        }
      >
        <Route path=":userid" element={<User />} />
      </Route>
      <Route loader={loadingInfo} path="github" element={<Github />} />
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
