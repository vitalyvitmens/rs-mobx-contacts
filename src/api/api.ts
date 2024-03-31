import { Response } from '../types/response'
import { ContactDto } from '../types/dto/ContactDto'
import { GroupContactsDto } from '../types/dto/GroupContactsDto'
import { API_BASE_URL, CONTACTS_URL, GROUPS_URL } from '../constants/config'

class Api {
  async getContacts(): Promise<Response<ContactDto[]>> {
    try {
      return await this.fetch(API_BASE_URL + CONTACTS_URL)
    } catch (error) {
      console.error('Ошибка при получении контактов:', error)
      throw error
    }
  }

  async getGroupContacts(): Promise<Response<GroupContactsDto[]>> {
    try {
      return await this.fetch(API_BASE_URL + GROUPS_URL)
    } catch (error) {
      console.error('Ошибка при получении групп контактов:', error)
      throw error
    }
  }

  async fetch(url: string, config?: RequestInit) {
    try {
      const response = await fetch(url, config)
      if (!response.ok) {
        throw new Error('Сетевая ошибка')
      }
      return response.json()
    } catch (error) {
      console.error('Ошибка при выполнении fetch:', error)
      throw error
    }
  }
}

export const api = new Api()
