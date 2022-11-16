import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListeCours from "./components/ListeCours/ListeCours";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import StudentCourses from "./components/Student-Courses/StudentCourses";
import Cours from "./components/Cours-details/Cours";
import AppContext from "./context";
import Context from "./context";
function App() {
  return (
    <Context>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ListeCours" element={<ListeCours />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/StudentCourses" element={<StudentCourses />} />
          <Route path="/Cours/:id" element={<Cours />} />
          {/*<Route path="/inscription" element={<RegistrationForm />} />*/}
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
