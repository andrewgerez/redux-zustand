import { useState, FormEvent } from 'react'

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('')

  const handleNewTodo = (e: FormEvent) => {
    e.preventDefault()

    console.log(newTodo);
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
