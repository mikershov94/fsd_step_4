import Container from './components/container';
import Wrapper from './components/wrapper';
import Rail from './components/rail';
import Slider from './components/slider';
import ProgressBar from './components/progress-bar';
import OutputField from './components/output-field';

abstract class View implements IView, IPublisher, ISubscriber {
    public page: JQuery<Document>;
    protected rootContainer: JQuery;
    protected rootComponent: IComponent;

    private subsribers: ISubscriber[] = [];

    constructor(rootContainer: JQuery) {
        this.page = $(document);
        this.rootContainer = rootContainer
        this.rootComponent = new Container({});
    }

    updateDataForParent(value: any): void {
        this.notify(value);
    }

    updateDataForChildren(value: any): void {
        this.rootComponent.updateDataForChildren(value);
    }

    subscribe(subscriber: ISubscriber): ISubscriber[] {
        this.subsribers.push(subscriber);
        return this.subsribers;
    }

    unsubscribe(subscriber: ISubscriber): ISubscriber[] {
        const arrEl = this.subsribers.indexOf(subscriber);
        this.subsribers.splice(arrEl, 1);
        return this.subsribers;
    }

    notify(value: any): void {
        this.subsribers.forEach((el: ISubscriber) => el.update(value))
    }

    update(value: any): void {
        this.rootComponent.updateDataForChildren(value);
    }

    render(): JQuery {
        return this.rootComponent.render(); 
    }
}

export default View;