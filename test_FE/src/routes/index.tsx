import { RouteObject } from "react-router-dom";
import Test1 from "../view/test1";
import Test2 from "../view/test2";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Test1 />
    },
    {
        path: '/quizz',
        element: <Test2 />
    },
];

export default routes;
