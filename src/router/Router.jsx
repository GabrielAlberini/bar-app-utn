import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "../components/List/List";
import { Users } from "../components/Users/Users";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:slug" element={<List />} />
        <Route path="*" element="hola"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
