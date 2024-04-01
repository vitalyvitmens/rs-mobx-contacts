import { Response } from '../types/response'
import { ContactDto } from '../types/dto/ContactDto'
import { GroupContactsDto } from '../types/dto/GroupContactsDto'
import { API_BASE_URL, CONTACTS_URL, GROUPS_URL } from '../constants/config'
import { errorMessages } from 'src/constants/errorMessages'

class Api {
  async getContacts(): Promise<Response<ContactDto[]>> {
    try {
      return await this.fetch(API_BASE_URL + CONTACTS_URL)
    } catch (error) {
      console.error(errorMessages.fetchContactsError, error)
      throw error
    }
  }

  async getGroupContacts(): Promise<Response<GroupContactsDto[]>> {
    try {
      return await this.fetch(API_BASE_URL + GROUPS_URL)
    } catch (error) {
      console.error(errorMessages.fetchGroupContactsError, error)
      throw error
    }
  }

  async fetch(url: string, config?: RequestInit) {
    try {
      const response = await fetch(url, config)
      if (!response.ok) {
        throw new Error(errorMessages.networkError)
      }
      return response.json()
    } catch (error) {
      console.error(errorMessages.fetchError, error)
      throw error
    }
  }
}

export const api = new Api()
