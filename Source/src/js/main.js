import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns:'.next', page: '.page'});
    slider.render();

    const palyer=new VideoPlayer('.showup .play', '.overlay') // в какой секции у нас кнопка. showup это секция
    palyer.init();
});