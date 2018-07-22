const phi = 22 / 7;

//---TWO DIMENSIONAL SHAPES
//---1. SQUARE
let square_side = 8;
let square_area = square_side * square_side;
console.log(`Square area with side = ${square_side} is ${square_area}`);

let square_perimeter = 4 * square_side;
console.log(`Square perimeter with side = ${square_side} is ${square_perimeter}`);


//---2. TRIANGLE
let triangle_base = 30;
let triangle_height = 8;
let triangle_area = 1/2 * triangle_base * triangle_height;

let side_1 = 3;
let side_2 = 4;
let side_3 = 5;
triangle_perimeter = side_1 + side_2 + side_3;


//---3. RECTANGLE
let length = 12;
let width = 13;
let rectangle_area = length * width;

let rectangle_perimeter =  2 * (length + width);


//---4. CIRCLE
let radius = 56;
let circle_area = phi * radius * radius;

let circle_perimeter = 2 * phi * radius;


//---5. PARALLELOGRAM
let parallelogram_base = 9;
let parallelogram_height = 5;
let parallelogram_area = parallelogram_base * parallelogram_height;

let parallelogram_perimeter = 2 * (parallelogram_base + parallelogram_height);


//---6. TRAPEZOID
let trapezoid_side_1 = 11;
let trapezoid_side_2 = 20;
let trapezoid_height = 9;
let trapezoid_area = (trapezoid_side_1 + trapezoid_side_2) * height / 2;

let trapezoid_side_3 = 13;
let trapezoid_side_4 = 13.5;
let trapezoid_perimeter = trapezoid_side_1 + trapezoid_side_2 + trapezoid_side_3 + trapezoid_side_4;


//---7. KITE
let kite_diagonal_1 = 15;
let kite_diagonal_2 = 12;
let kite_area = kite_diagonal_1 * kite_diagonal_2 / 2;

let kite_side_a = 13;
let kite_side_b = 20;
let kite_perimeter = 2 * (kite_side_a + kite_side_b);


//---8. RHOMBUS
let rhombus_diagonal_1 = 30;
let rhombus_diagonal_2 = 16;
let rhombus_area = rhombus_diagonal_1 * rhombus_diagonal_2 / 2;

let rhombus_side = 17;
let rhombus_perimeter = 4 * rhombus_side;


//--- THREE DIMENSIONAL SHAPES
//---1. CUBE
let cube_side = 12;
let cube_volume = cube_side * cube_side * cube_side;

let cube_area = 6 * cube_side * cube_side;


//---2. CUBOID
let cuboid_length = 25;
let cuboid_width = 20;
let cuboid_height = 15;
let cuboid_volume = cuboid_length * cuboid_width * cuboid_height;

let cuboid_area = 2 * (cuboid_length + cuboid_width) + 2 * (cuboid_length + cuboid_height) + 2 * (cuboid_width + cuboid_height);


//---3. BALL
let ball_radius = 42;
let ball_volume = 4/3 * phi * ball_radius * ball_radius * ball_radius;

let ball_area =  4 * phi * ball_radius * ball_radius;


//---4. CYLINDER
let cylinder_radius = 77;
let cylinder_height = 100;
let cylinder_volume = phi * cylinder_radius * cylinder_radius * cylinder_height;

let cylinder_area = (2 * phi * cylinder_radius * cylinder_height) + (2 * phi * cylinder_radius * cylinder_radius);


//---5. SQUARE PYRAMID
let square_pyramid_side = 24;
let square_pyramid_height = 35;
let square_pyramid_volume = 1/3 * square_pyramid_side * square_pyramid_side * square_pyramid_height;


//---6. TRIANGLE PYRAMID
let triangle_pyramid_base = 15;
let triangle_pyramid_base_height = 18;
let triangle_pyramid_height = 22;
let triangle_pyramid_volume = 1/3 * 1/2 * triangle_pyramid_base * triangle_pyramid_base_height * triangle_pyramid_height;


//---7. CONE
let cone_radius = 28;
let cone_height = 30;
let cone_volume = 1/3 * phi * cone_radius * cone_radius * cone_height;


//---8. PRISM
let prism_base = 21;
let prism_base_height = 24;
let prism_height = 30;
let prism_volume = 1/2 * prism_base * prism_base_height * prism_height;
