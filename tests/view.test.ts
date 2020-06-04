import puppeteer from 'puppeteer';
import SliderView from '../src/view';
import Slider from '../src/model';


describe('Testing view', () => {
    let browser: any;
    let page: any;
    let block: any;

    beforeAll(async () => {
        browser = await puppeteer.launch();
    })

    afterAll(async () => {
        browser.close()
    })

    describe('view should has method render()', () => {
        beforeEach(async () => {
            page = await browser.newPage();
            block = await page.setContent('<div id="fsd-slider"></div>');
        });

        afterEach(async () => {
            await page.close();
        })

        test('render should set HTML-template to div#fsd-slider', async () => {
            page.on('load', () => {
                const view = new SliderView();
                view.render();
                const plugin = page.$eval('.wrapper', (elem: any) => elem ? true : false);
                expect(plugin).toBe(true);
            })
        });
    });

    describe('view should has method updatePosition()', () => {
        beforeEach(async () => {
            page = await browser.newPage();
            block = await page.setContent('<div id="fsd-slider"></div>');
        });
    
        afterEach(async () => {
            await page.close();
        })

        let plugin = `<div class="wrapper">` +
                            `<div class="rail">` +
                                `<div class="slider" data-position="50"></div>` +
                            `</div>` +
                         `</div>`

        test('method should update slider position in HTML', async () => {
            page.on('load', () => {
                page.setContent(plugin);
                const view = new SliderView();
                view.updatePosition(25);
                const sliderPosition = page.$eval('.slider', (el: any) => {
                    return el.dataset.position
                })
                expect(sliderPosition).toBe(25);
            })
        })
    })

    describe('view should has method getRailPositon', () => {
        beforeEach(async () => {
            page = await browser.newPage();
            block = await page.setContent('<div id="fsd-slider"></div>');
        });
    
        afterEach(async () => {
            await page.close();
        })
        
        test('getRailPosition should return distance' +
                 'from left edge of document to left edge block rail', () => {

            
        });

    });

    
})