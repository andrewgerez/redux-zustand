import { useSelector } from 'react-redux'

export const TodoList = () => {
  const todos = useSelector(store => {
    return store.todo
  })

  console.log('store', todos);
  

  return (
    <ul>
      {todos.map(todo => <li key={todo}>{todo}</li>)}
    </ul>
  )
}
