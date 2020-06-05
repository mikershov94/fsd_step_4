//import puppeteer from 'puppeteer';
import SliderView from '../src/view';
import $ from 'jquery';


describe('Testing view', () => {
    let browser: any;
    let page: any;
    
    test('page is loaded', async () => {
        const newDiv = document.createElement('div');
        newDiv.id = 'fsd-slider';
        document.body.appendChild(newDiv);
        const plugin = document.querySelector('#fsd-slider');

        const view = new SliderView();
        view.render();
    
        expect(plugin.innerHTML).toEqual(`<div class="wrapper">` +
                                    `<div class="rail">` +
                                        `<div class="slider" data-position="50"></div>` +
                                    `</div>` +
                                `</div>`);
    });
})