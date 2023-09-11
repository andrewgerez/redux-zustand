import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { player } from './slices/player'

export const store = configureStore({  // Estado global da aplicação
  reducer: {  // Gerenciar os slices
    player,
  }
})

export type RootState = ReturnType<typeof store.getState> // Tipagem do retorno da função que retorna o estado global
export type AppDispatch = typeof store.dispatch // Tipagem da função dispatch para actions que não são nativas do Redux

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // Exportação do useSelector tipado
export const useAppDispatch: () => AppDispatch = useDispatch // Exportação do useDispatch tipado
