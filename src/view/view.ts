import Container from './components/container';
import Wrapper from './components/wrapper';
import Rail from './components/rail';
import Slider from './components/slider';
import ProgressBar from './components/progress-bar';
import OutputField from './components/output-field';

abstract class View implements IView {
    protected page: JQuery<Document>;

    protected rootElement: JQuery;
    protected sliderApp: JQuery;

    protected components: TComponentList;

    constructor(rootElement: JQuery) {
        this.page = $(document);
        this.rootElement = rootElement;

        this.components = {
            container: new Container(),
            wrapper: new Wrapper(),
            rail: new Rail(),
            slider: new Slider(),
            progressBar: new ProgressBar(),
            outputField: new OutputField(),
        }
    }

    protected createSlider(): JQuery {
        return $('<div></div>');
    }

    mount(): void {
        this.sliderApp = this.createSlider();
    }

    render(): JQuery {
        this.sliderApp.appendTo(this.rootElement);
        return this.sliderApp;
    }
}

export default View;