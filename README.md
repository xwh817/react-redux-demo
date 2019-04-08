# react-redux-demo
react-redux-demo，网上的todoList例子夹杂着太多业务逻辑、复杂对象、语法糖。这里只要最基本的组件，清晰明了，理解Redux的处理过程。


### 处理流程

```js

/**
 * 步骤1：
 * 使用Provider对顶层容器进行包裹，使所有组件都可以访问到store
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));



/**
 * 步骤2：
 * connect进行关联
 * mapStateToProps：store中的state和当前页面props的映射
 * mapDispatchToProps：store中的dispatch和当前页面事件关联
 */

const mapStateToProps = (state) => {
  return {
    result: state.counter.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch({
        type: 'add',
      });
    },
    subtract: () => {
      dispatch({
        type: 'subtract'
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


/**
 * 步骤3：
 * 实现reducer进行状态处理
 */
 const initialState = {
    result: 1
  };
  
/**
 * reducer是一个纯函数，根据action返回新的状态
 */
export default function(state = initialState, action) {
    switch (action.type) {
        case 'add': {
            return {result: state.result + 1}
        }
        case 'subtract': {
            return {...state, result: state.result - 1}
        }
        default:
            return state;
    }
}


/**
 * 步骤4：
 * 合并Reducers, 创建Store
 */
  rootReducer = combineReducers({ counter, todos });
  createStore(rootReducer);
  
  
/**
 * 步骤5：
 * 在React页面中，就可以通过props访问store，
 * 或是通过dispatch修改store了（之前映射关联过）
 */
  <p>result: {this.props.result}</p>
  <input type='button' value='add' onClick={this.props.add}/>  &nbsp;
  <input type='button' value='subtract' onClick={this.props.subtract}/>
 
```
