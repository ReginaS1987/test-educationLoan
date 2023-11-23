import Slider from './modules/slider';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();

    const palyer=new VideoPlayer('.showup .play', '.overlay') // в какой секции у нас кнопка. showup это секция
    palyer.init();
});