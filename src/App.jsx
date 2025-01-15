import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./components/Body";


function App() {
 
  return (
    <>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/feed" element={<Feed />}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
