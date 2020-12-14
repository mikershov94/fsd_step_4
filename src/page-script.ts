import '../src/index';

$('#alone').fsdSlider({
    rangeSlider: false,
    defaultValue: 250,
    verticalView: false,
    step: 4
});

$('#range').fsdSlider({
    rangeSlider: true,
    defaultValueA: 100,
    defaultValueB: 400,
    verticalView: true,
    step: 4
})