import slider from '../slider';

describe('UI-component slider', () => {
    
    it('slider should return Jquery-object', () => {
        expect(slider()).toBeInstanceOf(Object);
    })
    it('Jquery object contain HTML-template', () => {
        const template: string = '<div class="slider" data-position="50"></div>';
        expect(slider()[0].outerHTML).toBe(template);
    })

})