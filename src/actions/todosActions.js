const addTodo = (id, text) => {
    return {
      type: 'ADD_TODO',
      id: id,
      text: text
    }
  }

  const toggleTodo = (id) => {
    return {
      type: 'TOGGLE_TODO',
      id: id,
    }
  }
  

export default {
    addTodo,
    toggleTodo
}