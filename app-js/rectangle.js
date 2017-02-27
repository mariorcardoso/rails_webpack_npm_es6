class Rectangle {
  constructor(height, width, color) {
    this.height = height
    this.width = width
    this.color = color
  }

  draw(layer, stage) {
    var rectangle = new Konva.Rect({
      x: Math.random() * stage.getWidth(),
      y: Math.random() * stage.getHeight(),
      width: this.width,
      height: this.height,
      fill: this.color,
      stroke: this.color,
      strokeWidth: 1,

      draggable: true,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffset: {x: 5, y: 5},
      shadowOpacity: 0.6,
      scale: {x: 1, y: 1},
      startScale: 1
    });
    layer.add(rectangle);
  }
}

export { Rectangle }
