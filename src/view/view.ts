import Container from './components/container';
import Wrapper from './components/wrapper';
import Rail from './components/rail';
import Slider from './components/slider';
import ProgressBar from './components/progress-bar';
import OutputField from './components/output-field';

abstract class View implements IView {
    protected page: JQuery<Document>;

    protected rootElement: JQuery;
    protected mainContainer: JQuery;

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

    protected createSlider(): void {}

    mount(plugin: TAppContainer): void {
        this.createSlider();
    }

    render(): JQuery {
        console.log(this.mainContainer)
        this.mainContainer.appendTo(this.rootElement);
        return this.mainContainer
    }
}

export default View;