import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({  // Estado global da aplicação
  reducer: {  // Gerenciar os slices
    
  }
})

export type RootState = ReturnType<typeof store.getState> // Tipagem do retorno da função que retorna o estado global
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // Exportação do useSelector tipado
