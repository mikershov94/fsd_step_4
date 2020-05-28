import SliderView from '../src/view';


describe('Testing view.render()', () => {

    test('view should set HTML-template to div#fsd-slider', () => {
        const testTemplate = document;
        testTemplate.body.innerHTML = '<div id="fsd-slider"></div>';

        const testView = new SliderView();
        //создаем ожидаемую HTML-разметку
        const resultTemplate = '<div class="wrapper">' +
                                   '<div class="rail">' +
                                       '<div class="slider" data-position="50">' +
                                       '</div>' +
                                    '</div>' +
                               '</div>';
        

        //вызываем тестируемый метод c позицией 50
        testView.render(50);

        //проверяем результат его работы
        expect(testTemplate.body.children[0].innerHTML).toEqual(resultTemplate);
    });

    test('view should update slider position in HTML', () => {
        const testTemplate = document;
        testTemplate.body.innerHTML = '<div id="fsd-slider">' +
                                            '<div class="wrapper">' +
                                                '<div class="rail">' +
                                                    '<div class="slider" data-position="50">' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>'
                                      '</div>';

        const testView = new SliderView();
        const sourceTemplate = '<div class="wrapper">' +
                                    '<div class="rail">' +
                                        '<div class="slider" data-position="50">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>'
        
        const resultTemplate = '<div class="wrapper">' +
                                    '<div class="rail">' +
                                        '<div class="slider" data-position="25">' +
                                        '</div>' +
                                    '</div>' +
                                '</div>'

        expect(testTemplate.body.children[0].innerHTML).toEqual(sourceTemplate);
        testView.updatePosition(25)
        expect(testTemplate.body.children[0].innerHTML).toEqual(resultTemplate);
    })
})