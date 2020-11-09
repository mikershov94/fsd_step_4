import '../src/index';

import './page.sass';

$('#alone').fsdSlider({
    rangeSlider: false,
    defaultValue: 250,
    verticalView: false,
    step: 5
});

$('#range').fsdSlider({
    rangeSlider: true,
    verticalView: true
})