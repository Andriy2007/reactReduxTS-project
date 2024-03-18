import React, {FC, PropsWithChildren} from "react";

import css from './Badge.module.css'
import {IBadge} from "../../interfaces";

interface IProps extends PropsWithChildren {
    badge: IBadge
}
const Badge: FC<IProps> = ({ badge }) => {
    const {value, color} = badge;
    return (
        <div className={css.Badge} style={{ backgroundColor: "black", color }}>
            {value}
        </div>
    );
};

export {
    Badge
}