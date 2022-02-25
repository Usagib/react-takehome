import React from "react";
import { Link, Route, Routes} from "react-router-dom";
import SinglePage from "./SinglePage";

const About = ({ match }) => {
    console.log(match);
    return(
        <div>
            <ul>
                <li>
                    <Link to={match.url + '/about-app'}>
                        About App
                    </Link>
                </li>
                <li>
                    <Link to={match.url + '/about-author'}>
                        About Author
                    </Link>
                </li>
            </ul>
            <Routes>
                <Route path={`${match.path}/:slug`}>
                    <SinglePage />
                </Route>
            </Routes>
        </div>
    )
}

export default About