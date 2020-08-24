import Model from './model';

class ModelComponent extends Model implements IModelComponent {

    protected props:           TMessage;

    constructor(state: TState, children: IComponent[]) {
        super();
        this.state = state;
        this.props = {};
    }

    setProps(props: TMessage): void {
        this.props = props;
    }
}

export default ModelComponent;