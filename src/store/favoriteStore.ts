import { makeAutoObservable } from 'mobx'
import { ContactDto } from 'src/types/dto/ContactDto'
import { LOCAL_STORAGE_KEY } from 'src/constants/storageKeys'

class FavoriteStore {
  favorites: ContactDto[]

  constructor() {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY)
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : []
    makeAutoObservable(this)
  }

  addToFavorites(payload: ContactDto) {
    if (!this.favorites.some((contact) => contact.id === payload.id)) {
      this.favorites.push(payload)
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.favorites))
      } catch (error) {
        console.error('Failed to save to localStorage:', error)
      }
    }
  }

  removeFromFavorites(payload: ContactDto['id']) {
    const filteredFavorites = this.favorites.filter(
      (contact) => contact.id !== payload
    )
    this.favorites = filteredFavorites
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredFavorites))
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
    }
  }
}

export const favoriteStore = new FavoriteStore()
