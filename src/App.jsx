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
import Signup from "./components/Signup";
import Home  from "./components/Home";
import Chat from "./components/Chat";



function App() {
 
  return (
    <>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
            <Route index element={<Home />}></Route>
            <Route path="/feed" element={<Feed />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/connections" element={<Connections />}></Route>
            <Route path="/requests" element={<Requests />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
};

export default App
