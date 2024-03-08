const { circle, triangle, square } = require('./style.js');

test('display circle', () => {
    const mycircle = new circle('pink');
    const result = mycircle.render();
    const passed = result.match(/<circle/);
    expect(passed).toBeTruthy();
    if (passed) {
     console.log('display circle test passed');
    } else {
    console.error('display circle test failed'); }
});

test('display triangle', () => {
    const mytriangle = new triangle('orange');
    const result = mytriangle.render();
    const passed = result.match(/<polygon/);
    expect(passed).toBeTruthy();
    if (passed) {
     console.log('display triangle test passed');
    } else {
    console.error('display triangle test failed');  }
});

test('display square', () => {
    const mysquare = new square('grey');
    const result = mysquare.render();
    const passed = result.match(/<rect/);
    expect(passed).toBeTruthy();
    if (passed) {
  console.log('display square test passed');
    } else {
     console.error('display square test failed'); }
});
