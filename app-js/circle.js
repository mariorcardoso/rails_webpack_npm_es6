class Circle {
  constructor(diameter, color) {
    this.diameter = diameter
    this.color = color
  }

  draw(layer, stage) {
      var circle = new Konva.Circle({
        x: Math.random() * stage.getWidth(),
        y: Math.random() * stage.getHeight(),
        radius: this.diameter,
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
      layer.add(circle);
  }
}

export { Circle }
