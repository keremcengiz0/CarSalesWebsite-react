import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthLogin from "./components/Auth/AuthLogin";
import AuthRegister from "./components/Auth/AuthRegister";
import CurrentUserAdverts from "./components/Advert/CurrentUserAdverts";
import CategoryAdverts from "./components/Advert/Category";
import AdvertForm from "./components/Advert/AdvertForm";
import AdvertDetail from "./components/Advert/AdvertDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/auth/login" element={<AuthLogin />}></Route>
          <Route exact path="/auth/register" element={<AuthRegister />}></Route>
          <Route
            exact
            path="/users/:userId/adverts"
            element={<CurrentUserAdverts />}
          ></Route>
          <Route
            exact
            path="/adverts/kategori/:path"
            element={<CategoryAdverts />}
          ></Route>
          <Route
            exact
            path="adverts/add-adverts"
            element={<AdvertForm />}
          ></Route>
          <Route
            exact
            path="adverts/:advertId"
            element={<AdvertDetail />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
