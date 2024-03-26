import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home/Home";
import { PageTeste } from "./Page/PageTeste/PageTeste";
import { Update } from "./components/Update/Update";

export const Router = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<PageTeste />} />
            <Route path="/updateLista/:id" element={<Update />} />
        </Routes>
    );
};
