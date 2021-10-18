import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/appRouter";
import React from "react";
import "materialize-css/dist/css/materialize.min.css";

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
