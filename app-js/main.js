import Konva from 'konva'
import { Rectangle } from './rectangle'
import { Square } from './square'
import { Circle } from './circle'
import { CanvasLibrary } from './canvas_library'

$(document).ready(function() {
  var canvas = new CanvasLibrary();
  var layer = canvas.get_layer();
  var stage = canvas.get_stage();

  var rectangle, square, circle;
  for(var n = 0; n < 15; n++) {
    var size = Math.random()*120;
    rectangle = new Rectangle(size, size*2, '#79CF8D');
    square = new Square(size, '#56A6ED');
    circle = new Circle(size/2, '#A93036');
    rectangle.draw(layer, stage)
    square.draw(layer, stage)
    circle.draw(layer, stage)
  }

  stage.draw();
})
