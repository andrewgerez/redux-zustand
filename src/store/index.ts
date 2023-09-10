import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

  reducers: {  // Criar ações do slice para fazer alterações no estado
    add: (state, action) => {
      state.push(action.payload.newTodo)
    }
  },
})

export const store = configureStore({  // Estado global da aplicação
  reducer: {  // Gerenciar os slices
    todo: todoSlice.reducer
  }
})

export const { add } = todoSlice.actions
