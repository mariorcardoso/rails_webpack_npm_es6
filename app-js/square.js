import { Rectangle } from './rectangle'

class Square extends Rectangle {
  constructor(size, color) {
    super(size, size, color)
  }
}

export { Square }
