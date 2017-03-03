import { Rectangle } from './rectangle'
import { Square } from './square'
import { Circle } from './circle'
import { CanvasLibrary } from './canvas_library'

$(document).ready(function() {
  const canvas = new CanvasLibrary();
  const layer = canvas.get_layer();
  const stage = canvas.get_stage();

  let rectangle, square, circle;
  for(let n = 0; n < 15; n++) {
    let size = Math.random()*120;
    rectangle = new Rectangle(size, size*2, '#79CF8D');
    square = new Square(size, '#56A6ED');
    circle = new Circle(size/2, '#A93036');
    rectangle.draw(layer, stage)
    square.draw(layer, stage)
    circle.draw(layer, stage)
  }

  stage.draw();
})
