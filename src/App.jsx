import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./components/Body";
import Profile from "./components/profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";



function App() {
 
  return (
    <>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/connections" element={<Connections />}></Route>
            <Route path="/requests" element={<Requests />}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
