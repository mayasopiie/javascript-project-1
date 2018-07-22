const phi = 22 / 7;

//---TWO DIMENSIONAL SHAPES
//---1. SQUARE
function square_area(side){
    return side * side;
}

function square_perimeter(side){
    return 4 * side;
}

//---2. TRIANGLE
function triangle_area(base, height){
    return base * height / 2;
}

function triangle_perimeter(side_1, side_2, side_3){
    return side_1 + side_2 + side_3;
}


//---3. RECTANGLE
function rectangle_area(length, width){
    return length * width;
}

function rectangle_perimeter(length, width){
    return 2 * (length + width);
}


//---4. CIRCLE
function circle_area(radius){
    return phi * radius * radius;
}

function circle_perimeter(radius){
    return 2 * phi * radius;
}

//---5. PARALLELOGRAM
function parallelogram_area(base, height){
    return base * height;
}

function parallelogram_perimeter(base, height){
    return 2 * (base + height);
}


//---6. TRAPEZOID
function trapezoid_area(side_1, side_2, height){
    return (side_1 + side_2) * height / 2;
}

function trapezoid_perimeter(a, b, c, d){
    return a + b + c + d;
}


//---7. KITE
function kite_area(diagonal_1, diagonal_2){
    return diagonal_1 * diagonal_2 / 2;
}

function kite_perimeter(side_a, side_b){
    return 2 * (side_a + side_b);
}


//---8. RHOMBUS
function rhombus_area(diagonal_1, diagonal_2){
    return diagonal_1 * diagonal_2 / 2;
}

function rhombus_perimeter(side){
    return 4 * side;
}


//--- THREE DIMENSIONAL SHAPES
//---1. CUBE
function cube_volume(side){
    return side * side * side;
}

function cube_area(side){
    return 6 * side;
}

//---2. CUBOID
function cuboid_volume(length, width, height){
    return length * width * height;
}

function cuboid_area(length, width, height){
    return 2 * (length + width) + 2 * (length + height) + 2 * (width + height);
}

//---3. BALL
function ball_volume(radius){
    return 4/3 * phi * radius * radius * radius;
}

function ball_area(radius){
    return 4 * phi * radius * radius;
}

//---4. CYLINDER
function cylinder_volume(radius, height){
    return phi * radius * radius * height;
}
function cylinder_area(radius, height){
    return (2 * phi * radius * height) + (2 * phi * radius * radius);
}

//---5. SQUARE PYRAMID
function square_pyramid_volume(side, height){
    return 1/3 * side * side * height;
}

//---6. TRIANGLE PYRAMID
function triangle_pyramid_volume(base, base_height, height){
    return 1/3 * 1/2 * base * base_height * height;
}

//---7. CONE
function cone_volume(radius, height){
    return 1/3 * phi * radius * radius * height;
}

//---8. PRISM
function prism_volume(base, base_height, height){
    return 1/2 * base * base_height * height;
}

console.log(square_area(7));
console.log(square_perimeter(7));