interface THandler {
    (e: Evt): void;
}

interface TDownHandler extends THandler {
    (e: JQuery.MouseDownEvent): void;
}

interface TMoveHandler extends THandler {
    (e: JQuery.MouseMoveEvent): void;
}

interface TUpHandler extends THandler {
    (e: JQuery.MouseUpEvent): void;
}

interface TResizeHandler extends THandler {
    (e: JQuery.ResizeEvent): void;
}