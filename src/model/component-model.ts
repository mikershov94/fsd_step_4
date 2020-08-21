import Model from './model';

class ModelComponent extends Model {

    protected parent:          IComponent | IView;
    protected children:        IComponent[];
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