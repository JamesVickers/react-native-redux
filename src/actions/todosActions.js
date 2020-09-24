const addTodo = (id, text) => {
    return {
      type: 'ADD_TODO',
      id: id,
      text: text
    }
  }

  
export default {
    addTodo
}