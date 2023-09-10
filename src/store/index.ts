import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

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

export type RootState = ReturnType<typeof store.getState> // Tipagem do retorno da função que retorna o estado global
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // Exportação do useSelector tipado
