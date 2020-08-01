abstract class Component {

    protected state: TState;
    protected parent: any;
    protected children: any; //это массив
    protected template: string; //обязательное

    constructor(props: any) {
        
    }

}

export default Component;