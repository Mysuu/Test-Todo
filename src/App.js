import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Form/Login";
import Register from "./components/Form/Register";
import Todos from "./components/Todo/Todos";
import Navbar from "./components/Navbar/Navbar";
import PrivateForm from "./routes/PrivateForm";
import PrivateTodo from "./routes/PrivateTodo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateForm />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/todo" element={<PrivateTodo />}>
            <Route index element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
