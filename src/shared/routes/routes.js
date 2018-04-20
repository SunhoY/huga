import {ConnectedLogin} from "../component/login/login";
import {Join} from "../component/join/join";
import {ConnectedMyPage} from "../component/my-page/my-page";

const createRoute = (path, component, exact = true) => ({
    path,
    component,
    exact
});

export const routes = [
    createRoute('/', ConnectedLogin),
    createRoute('/member/join', Join),
    createRoute('/my-page', ConnectedMyPage),
    createRoute('/leave/application', LeaveApplication)
];
