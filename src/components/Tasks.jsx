import React, { Component } from "react";
import "../styles/tasks.css";
import picture from '../assest/images.jpeg'

export class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <div className="task">
        <img
            style={{
              float: "right",
            //   height: "50px",
            //   width: "50px",
            //   borderRadius: "50%",
            }}
            src='https://img.icons8.com/android/24/000000/alarm-clock.png'
            alt="avatar"
          ></img>

          <h4>Hello Floyd Mullins</h4>
          <p className="grey">you have 3 tasks</p>
        </div>
        <div className="task">
        <img
            style={{
              float: "right",
            //   height: "50px",
            //   width: "50px",
            //   borderRadius: "50%",
            }}
            src='https://img.icons8.com/android/24/000000/alarm-clock.png'
            alt="avatar"
          ></img>

          <h4>Hello Floyd Mullins</h4>
          <p className="grey">you have 3 tasks</p>
        </div>
        <div className="task">
          <img
            style={{
              float: "right",
            //   height: "50px",
            //   width: "50px",
            //   borderRadius: "50%",
            }}
            src='https://img.icons8.com/android/24/000000/alarm-clock.png'
            alt="avatar"
          ></img>

          <h4>Hello Floyd Mullins</h4>
          <p className="grey">you have 3 tasks</p>
        </div>
        <div className="task taskend" style={{backgroundColor:'ebeeef'}}>
        <img
            
            style={{
              float: "right",
            //   width: "50px",
            //   borderRadius: "50%",
            }}
            src='https://img.icons8.com/android/24/000000/alarm-clock.png'
            alt="avatar"
          ></img>

          <h4>Hello Floyd Mullins</h4>
          <p className="grey">you have 3 tasks</p>
        </div>
      </div>
    );
  }
}

export default Tasks;
