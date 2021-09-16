import { Fragment } from "react/cjs/react.production.min";
import Header from "../Components/Layout/Header";
import Slider from "./Slider";
const Homepage = (props) => {
    return (
        <Fragment>
            <Header
                onShowAccountHandler={onShowAccountHandler}
                onHideAccountHandler={onHideAccountHandler} />
            <Slider />
        </Fragment>
    );
}

export default Homepage;