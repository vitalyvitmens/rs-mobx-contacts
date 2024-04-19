import { makeAutoObservable } from 'mobx'
import { api } from '../api/api'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const groupStore = makeAutoObservable({
  groupContacts: [] as GroupContactsDto[],
  *get() {
    const result: GroupContactsDto[] = yield api.getGroupContacts()

    if (result) {
      this.groupContacts = result
    }
  },
})
