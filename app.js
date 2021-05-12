const react = {
   perimeter: (x, y) => 2 * (x + y), 
   area: (x,y) => x * y
}; 

function solveReact(l,w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    if (l <= 0 || w <= 0 ) {
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${react.area(l, w)}`);
        console.log(`Perimeter of rectangle: ${react.perimeter(l, w)} `);
    }

}

solveReact (2, 4);
solveReact (3, 5);
solveReact (0, 5);
solveReact (5, -3);