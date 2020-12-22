/*
* todoApp Global Store
* with its reducer Function
*
* Example of context reducer to use across multiple components
* https://stackoverflow.com/questions/55301495/issues-with-usereducer-not-synchronously-updating-the-state
*
* Use spread operator when returning from reducer, just using object reference will not do
*/

// popullated by API call
// Task Categories
export const initialState = {
  fetchTimestamp: new Date(1608445333000),
  count: 2,
  todoApp: [
    {
      created: new Date(1608445333400),
      title: 'first todo',
      description: 'this is my first todo task',
      completed: false,
      completedTimestamp: null,
      category: 'some category'
    },
    {
      created: new Date(1608445339000),
      title: 'second todo',
      description: 'this is my second todo task',
      completed: false,
      completedTimestamp: null,
      category: 'some category'
    }
  ]
};

// CRUD Operations
export function todoAppReducerFn(todoAppStore, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return createTodoItem(todoAppStore, action.payload)
    case 'decrement':
      return { count: todoAppStore.count - 1 };
    default:
      throw new Error();
  }
}

const createTodoItem = (todoAppStore, item) => {
  const newCount = todoAppStore.todoApp.push(item)
  todoAppStore.count = newCount
  // send update to server to update
  // set state loading
  // console.dir(todoAppStore);
  return { ...todoAppStore }
}

export function init(initialCount) {
  return { count: initialCount }
}


export function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      state.count = state.count + 1
      return { ...state }
    case 'decrement':
      state.count = --state.count
      return { ...state }
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}
