import '../src/index';

$('#alone').fsdSlider({
    rangeSlider: false,
    defaultValue: 250,
    verticalView: true,
    step: 5
});

$('#range').fsdSlider({
    rangeSlider: true,
    verticalView: true
})