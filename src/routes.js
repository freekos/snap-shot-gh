import { HOME_ROUTE, SEARCH_ROUTE, RESULT_ROUTE } from "./util/consts";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Result from "./pages/Result/Result";

const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: SEARCH_ROUTE,
        Component: Search,
    },
    {
        path: RESULT_ROUTE,
        Component: Result,
    },

];

export { publicRoutes };