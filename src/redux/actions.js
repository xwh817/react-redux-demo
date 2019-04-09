/**
 * 将action抽取出来
 * action名字 => funciton调用
 */

export const add = () => ({ type: 'add' });

export const subtract = () => ({ type: 'subtract' });

export const addTask = (input) => ({
    type: 'addTask',
    payload: input
});

export const removeTask = (taskId) => ({
    type: 'removeTask',
        payload: taskId
});