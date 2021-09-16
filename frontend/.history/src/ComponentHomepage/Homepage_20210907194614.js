import { Fragment } from "react/cjs/react.production.min";
import Header from "../Components/Layout/Header";
import Slider from "./Slider";
const Homepage = (props) => {
    return (
        <Fragment>
            <Header
                onShowAccountHandler={props.onShowAccountHandler}
                onHideAccountHandler={props.onHideAccountHandler} />
            <Slider />
        </Fragment>
    );
}

export default Homepage;