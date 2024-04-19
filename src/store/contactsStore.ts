import { makeAutoObservable } from 'mobx'
import { api } from '../api/api'
import { ContactDto } from 'src/types/dto/ContactDto'

export const contactsStore = makeAutoObservable({
  contacts: [] as ContactDto[],
  *get() {
    const result: ContactDto[] = yield api.getContacts()

    if (result) {
      this.contacts = result
    }
  },
})
