import $ from 'jquery';

class SliderView {
    public plugin: any;
    public wrapper: any;
    public rail: any;
    public slider: any;

    constructor() {
        this.plugin = document.querySelector('#fsd-slider')

    }

    subscribeOnMouseDown(callback: any): void {
        this.slider.addEventListener('mousedown', callback);
    }

    subscribeOnMouseMove(callback: any): void {
        document.addEventListener('mousemove', callback)
    }
    
    subscribeOnMouseUp(callback: any): void {
        document.addEventListener('mouseup', callback);
    }

    unsubscribeFromMouseMove(callback: any): void {
        document.removeEventListener('mousemove', callback);
    }

    getRailPosition(): number {
        console.log(this.wrapper)
        return 100;
    }

    getSliderPosition() {
        console.log('')
    }
    
    updatePosition(newPosition: number) {
        this.wrapper.find('.slider').attr('data-position', newPosition);
    }

    render(position: number = 50): void {
        this.wrapper = document.createElement('div');
        this.rail = document.createElement('div');
        this.slider = document.createElement('div');

        this.wrapper.className = 'wrapper';
        this.rail.className = 'rail';
        this.slider.className = 'slider';

        this.slider.dataset.position = position;
        
        this.plugin.appendChild(this.wrapper);
        this.wrapper.appendChild(this.rail);
        this.rail.appendChild(this.slider);

    }
}

export default SliderView;