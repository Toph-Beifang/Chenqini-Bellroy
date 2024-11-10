import React, { useState } from "react";
import "./Table.css";
import tableSize from "../constant/table-size";
import defaultRobot from "../feature/robot";
import robotFaceDirection from "../constant/robot-face-direction";
import robotImage from "../assets/robot_icon.png";

const Table = () => {
  const [robot, setRobot] = useState(defaultRobot);

  const changeDirection = (direction) => {
    defaultRobot.setDirection(direction);
    setRobot({ ...defaultRobot });
  };

  const moveRobot = () => {
    defaultRobot.move();
    setRobot({ ...defaultRobot });
  };

  const getArrowSymbol = () => {
    switch (robot.currentFacing) {
      case robotFaceDirection.UP:
        return "↑";
      case robotFaceDirection.DOWN:
        return "↓";
      case robotFaceDirection.LEFT:
        return "←";
      case robotFaceDirection.RIGHT:
        return "→";
      default:
        return "";
    }
  };

  return (
    <div className="table-container">
      {/* Table Grid */}
      <table className="table">
        <tbody>
          {Array(tableSize.mY)
            .fill()
            .map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array(tableSize.mX)
                  .fill()
                  .map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className={`table-cell ${
                        robot.position.x === colIndex &&
                        robot.position.y === rowIndex
                          ? "table-cell-active"
                          : ""
                      }`}
                    >
                      {/* Show Robot and Arrow */}
                      {robot.position.x === colIndex &&
                      robot.position.y === rowIndex ? (
                        <div className="robot-container">
                          <span className="arrow">{getArrowSymbol()}</span>
                          <img
                            src={robotImage}
                            alt="robot"
                            className="robot-image"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
      {/* Control Buttons */}
      <div className="button-container">
        <button
          onClick={() => changeDirection(robotFaceDirection.UP)}
          className="control-button"
        >
          ↑ Up
        </button>
        <button
          onClick={() => changeDirection(robotFaceDirection.LEFT)}
          className="control-button"
        >
          ← Left
        </button>
        <button
          onClick={() => changeDirection(robotFaceDirection.RIGHT)}
          className="control-button"
        >
          → Right
        </button>
        <button
          onClick={() => changeDirection(robotFaceDirection.DOWN)}
          className="control-button"
        >
          ↓ Down
        </button>
        <button onClick={moveRobot} className="control-button">
          Move
        </button>
      </div>
    </div>
  );
};

export default Table;
