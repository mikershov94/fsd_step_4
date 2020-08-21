import Model from './model';

class ModelComponent extends Model implements IModelComponent {

    protected parent:          IComponent | IView;
    protected children:        IComponent[];
    protected props:           TMessage;

    constructor() {
        super();
        this.children = [];
        this.props = {};
    }

    setProps(props: TMessage): void {
        this.props = props;
    }

}

export default ModelComponent;