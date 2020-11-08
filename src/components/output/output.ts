import Component from '../index';

class Output extends Component {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setTemplate(): string {
        return '<div class="output"></div>';
    }

}

export default Output
