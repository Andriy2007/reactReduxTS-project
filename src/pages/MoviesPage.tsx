import {Outlet} from "react-router-dom";

import {Movies} from "../components";
const MoviesPage = () => {
    return (
        <div>
            <Movies/>
            <Outlet/>
        </div>
    );
};

export {
    MoviesPage
}