import Model from './model';

class ModelComponent extends Model {

    protected parent:          IComponent | IView;
    protected children:        IComponent[];
    protected parentView:      IView;
    protected notifier:        IPublisher;
    protected template:        string;
    protected jQueryElement:   JQuery;
    protected props:           TMessage;

    constructor() {
        super();
        this.children = [];
        this.props = {};
        this.template = '';
    }

    protected setProps(props: TMessage): void {
        return
    }

}

export default ModelComponent;