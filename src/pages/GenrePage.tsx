import {Outlet} from "react-router-dom";

import {Genres} from "../components";
const GenrePage = () => {
    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {
    GenrePage
}