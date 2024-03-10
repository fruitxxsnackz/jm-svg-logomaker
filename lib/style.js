// function to set background
function logo (bkg) {
    this.bkg = bkg;
}

// function to define circle, on top of the original function and that input
function circle (bkg) {

    logo.call(this, bkg);
}

// pass input demands onto the circle using prototype
circle.prototype = Object.create(logo.prototype);
circle.prototype.constructor = circle;

// render prototype to create logo
circle.prototype.render = function() {
   
    return '<circle cx="150" cy="100" r="80" fill="' + this.bkg + '" />';
};

// apply the same methods onto the next two shapes
function triangle (bkg) {

    logo.call(this, bkg);
}

triangle.prototype = Object.create(logo.prototype);
triangle.prototype.constructor = triangle;

triangle.prototype.render = function() {

    return '<polygon points="150,20 250,180 50,180" fill="' + this.bkg + '" />';
};

function square (bkg) {
    logo.call(this, bkg);
}

square.prototype = Object.create(logo.prototype);
square.prototype.constructor = square;

square.prototype.render = function() {

    return '<rect x="70" y="50" width="160" height="160" fill="' + this.bkg + '" />';
};

// export shapes so it can be linked in another file
export { circle, triangle, square };