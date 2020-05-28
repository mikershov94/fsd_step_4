import SliderView from '../src/view';


describe('Testing view.render()', () => {
    const testTemplate = document;
    testTemplate.body.innerHTML = '<div id="fsd-slider"></div>';

    test('method render should set HTML-template to div#fsd-slider', () => {
        const testView = new SliderView();
        //создаем ожидаемую HTML-разметку
        const resultTemplate = '<div class="wrapper">' +
                                   '<div class="rail">' +
                                       '<div class="slider" data-position="50">' +
                                       '</div>' +
                                    '</div>' +
                               '</div>'
        

        //вызываем тестируемый метод
        testView.render(50);

        //проверяем результат его работы
        expect(testTemplate.body.children[0].innerHTML).toEqual(resultTemplate);
    });
})