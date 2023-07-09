import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Header from "./components/Header";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Chat />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;
