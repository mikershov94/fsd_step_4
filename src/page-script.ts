import '../src/index';

$('#alone').fsdSlider({
    rangeSlider: false,
    defaultValue: 250,
    verticalView: false,
    step: 4
});

$('#range').fsdSlider({
    rangeSlider: true,
    verticalView: true
})