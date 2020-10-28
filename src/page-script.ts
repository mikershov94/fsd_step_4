import '../src/index';

$('#alone').fsdSlider({
    rangeSlider: false,
    defaultPosition: 250,
    verticalView: false,
    step: 5
});

$('#range').fsdSlider({
    rangeSlider: true,
    verticalView: true
})