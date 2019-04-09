import React, { Component } from 'react';
import {connect} from "react-redux"
import {add, subtract, addTask, removeTask} from "./redux/actions"

/**
 * create-react-app react-demo
 * npm install --save redux
 * npm install --save react-redux
 */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { input: "new task" };
  }

  updateInput = (input) => {
    this.setState({
      input
    });
  }

  render() {
    return (
      <div className="App">
        <p>Demo1. 使用Redux对状态值进行加和减：</p>
        <p>result: {this.props.result}</p>
        <input type='button' value='add' onClick={this.props.add}/>  &nbsp;
        <input type='button' value='subtract' onClick={this.props.subtract}/>


        <p style={{marginTop:50}}>Demo2. toDoList,元素的添加和删除：</p>
        <p>ToDoList:</p>
        <ul>
          {this.props.todoList.map(task => <li key={task.id} onClick={() => this.props.removeTask(task.id)}>{task.name}</li>)}
        </ul>
        
        <input type='text' value={this.state.input} onChange={e => this.updateInput(e.target.value)}/>&nbsp;
        <input type='button' value='add' onClick={() => this.props.addTask(this.state.input)}/> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.counter.result,
    todoList: state.todos.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({
        type: 'add',
      })
    ,
    subtract: () => {
      dispatch({
        type: 'subtract'
      });
    },
    addTask: (input) => {
      dispatch({
        type: 'addTask',
        payload: input
      });
    },
    removeTask: (taskId) => {
      dispatch({
        type: 'removeTask',
        payload: taskId
      });
    },
  };
}

/**
 * 通过connect进行关联。
 * mapStateToProps：store中的state和当前页面props的映射
 * mapDispatchToProps：store中的dispatch和当前页面事件关联
 */
// 直接定义的写法：
//export default connect(mapStateToProps, mapDispatchToProps)(App);

// 将action进行抽取后的写法：
export default connect(
  mapStateToProps, 
  {add, subtract, addTask, removeTask})(App);
//export default App;