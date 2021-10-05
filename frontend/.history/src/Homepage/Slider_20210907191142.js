import styles from './Slider.module.css';
import sliderImage1 from './assets/images/slider-1.png';
import sliderImage2 from './assets/images/slider-2.png';
const Slider = (props) => {
    const carouselClassName = `${styles['homepage-slider']} carousel slide`;
    const sliderImageContainerClassName = `${styles['slider-image']} d-block w-100`;
    return (
        <div id="carouselExampleIndicators" className={carouselClassName} data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="slider-image d-block" src={sliderImage1} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className={sliderImageContainerClassName} src={sliderImage2} alt="Second slide"/>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Slider;