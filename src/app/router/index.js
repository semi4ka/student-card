import MainPage from "../layouts/mainPage";
import CreateCardPage from "../components/createCardPage";

export const publicRoutes = [
    { path: "/", component: MainPage, exact: true },
    { path: "/create", component: CreateCardPage, exact: true }
];
