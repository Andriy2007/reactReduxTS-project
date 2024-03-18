import {FC, PropsWithChildren} from "react";

import {IStars} from "../../interfaces";

interface IProps extends PropsWithChildren {
    star: IStars
}

const Stars: FC<IProps> = ({ star }) => {
    const {rating, maxRating} = star;
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            stars.push(<span key={i}>&#9733;</span>);
        } else {
            stars.push(<span key={i}>&#9734;</span>);
        }
    }
    return <div>{stars}</div>;
};

export {
    Stars
}