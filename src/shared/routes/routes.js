import {Login} from "../component/login/login";
import {Join} from "../component/join/join";

const createRoute = (path, component, exact = true) => ({
    path,
    component,
    exact
});

export const routes = [
    createRoute('/', Login),
    createRoute('/user/join', Join),
];
