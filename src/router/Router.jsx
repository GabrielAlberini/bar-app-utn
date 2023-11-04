import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "../components/List/List";
import { Users } from "../components/Users/Users";
import { NotFound } from "../components/NotFound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:slug" element={<List />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
