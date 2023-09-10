import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store'

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()  // Dispara alterações no estado

  const handleNewTodo = (e: FormEvent) => {
    e.preventDefault()

    dispatch(add({
      newTodo,
    }))

    setNewTodo('')
  }
  
  return (
    <form onSubmit={handleNewTodo}>
      <input 
        type="text" 
        placeholder="Novo to-do" 
        value={newTodo} 
        onChange={e => setNewTodo(e.target.value)} 
      />

      <button type="submit">Adicionar</button>
    </form>
  )
}
