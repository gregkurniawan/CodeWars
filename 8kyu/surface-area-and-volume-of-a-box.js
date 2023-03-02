// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


//My solution
const getSize = (width, height, depth) => [(2 * depth * width) + (2 * depth * height) + (2 * height * width), (depth * width * height)]
