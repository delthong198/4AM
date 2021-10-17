import styles from './Slider.module.css';
import sliderImage1 from './assets/images/slider-1.jpg';
import sliderImage2 from './assets/images/slider-2.jpg';
const Slider = (props) => {
    const carouselClassName = `${styles['homepage-slider']} carousel slide`;
    return (
        <div id="carouselExampleIndicators" class={carouselClassName} data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={sliderImage1} alt="First slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={sliderImage2} alt="Second slide"/>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Slider;