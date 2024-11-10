import robotFaceDirection from "../constant/robot-face-direction";
import tableSize from "../constant/table-size";

const robot = {
  position: {
    x: 1,
    y: 1,
  },
  currentFacing: robotFaceDirection.UP,

  // Check is the robot position is out of bound
  checkIfOutOfBound: (position) => {
    const { x, y } = position;
    return x < 0 || x >= tableSize.mX || y < 0 || y >= tableSize.mY;
  },

  // Move the robot according to facing position
  move: function () {
    const newPosition = { ...this.position };
    switch (this.currentFacing) {
      case robotFaceDirection.UP:
        newPosition.y -= 1;
        break;
      case robotFaceDirection.DOWN:
        newPosition.y += 1;
        break;
      case robotFaceDirection.LEFT:
        newPosition.x -= 1;
        break;
      case robotFaceDirection.RIGHT:
        newPosition.x += 1;
        break;
      default:
        break;
    }

    // alert if out of bount
    if (this.checkIfOutOfBound(newPosition)) {
      alert("Out of bounds!");
      return;
    }

    this.position = newPosition;
  },

  // update facing position
  setDirection: function (direction) {
    this.currentFacing = direction;
  },
};

export default robot;
