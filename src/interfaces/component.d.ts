interface IComponent {
    mount(): JQuery;
}

interface TComponentList {
    container: IComponent,
    wrapper: IComponent,
    rail: IComponent,
    slider: IComponent,
    progressBar: IComponent,
    outputField: IComponent
}