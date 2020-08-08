abstract class Model implements IModel {

    protected data: ModelState;

    constructor(state: any) {
        this.data.max = state.max;
        this.data.min = state.min;
        this.data.step = state.step;
    }
    
    getState(): DataModel {
        return this.data;
    }

    setState(data: DataModel): void {
        Object.assign(this.data, data);
    }

}

export default Model;