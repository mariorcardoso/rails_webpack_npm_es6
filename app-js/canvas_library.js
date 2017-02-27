import Konva from 'konva'

class CanvasLibrary {
  constructor() {
    this.stage = new Konva.Stage({
        container: 'container',
        width: window.innerWidth,
        height: window.innerHeight
    })
    this.layer = new Konva.Layer();
    this.dragLayer = new Konva.Layer();
    this.stage.add(this.layer, this.dragLayer)

    this.stage.on('dragstart', (function(evt){ this._stage_dragstart_touchstart(evt) }).bind(this) )
    this.stage.on('dragend', (function(evt) { this._stage_dragend_touchend(evt) }).bind(this) )
  }

  _stage_dragstart_touchstart(evt) {
    var tween = null;
    var shape = evt.target;
    shape.moveTo(this.dragLayer);
    this.stage.draw();

    if (tween) {
      tween.pause();
    }
    shape.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scale: {
        x: shape.getAttr('startScale') * 1.2,
        y: shape.getAttr('startScale') * 1.2
      }
    });
  }

  _stage_dragend_touchend(evt) {
    var shape = evt.target;
    shape.moveTo(this.layer);
    this.stage.draw();
    shape.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: shape.getAttr('startScale'),
      scaleY: shape.getAttr('startScale'),
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  }

  get_stage() { return this.stage }
  get_layer() { return this.layer }
}

export { CanvasLibrary }
