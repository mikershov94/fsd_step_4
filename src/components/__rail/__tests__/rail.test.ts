import rail from '../rail';

describe('UI-component rail', () => {
    
    it('rail should return Jquery-object', () => {
        expect(rail()).toBeInstanceOf(Object);
    })
    it('Jquery object contain HTML-template', () => {
        const template: string = '<div class="rail"></div>';
        expect(rail()[0].outerHTML).toBe(template);
    })

})