import { Fragment } from "react/cjs/react.production.min";
import Slider from "./Slider";
import styles from './Homepage.module.css';

const Homepage = (props) => {
    return (
        <Fragment>
            <Slider />
            <h2 className={styles['about-us-title']}>About us</h2>
        </Fragment>
    );
}

export default Homepage;