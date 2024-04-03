import { Suspense, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { contactsStore } from 'src/store/contactsStore'
import { groupStore } from 'src/store/groupStore'
import { ContactCard } from 'src/components/ContactCard/ContactCard'
import {
  FilterForm,
  FilterFormValues,
} from 'src/components/FilterForm/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Col, Row, Spinner } from 'react-bootstrap'

export const ContactListPage = observer(() => {
  const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>([])
  const contacts = contactsStore.contacts
  const groups = groupStore.groupContacts

  useEffect(() => {
    if (contacts) {
      setFilteredContacts(contacts)
    }
  }, [contacts, groups])

  const handleFilter = (fv: Partial<FilterFormValues>) => {
    const filtered = contacts.filter((contact) => {
      const nameMatch =
        !fv.name || contact.name.toLowerCase().includes(fv.name.toLowerCase())
      const groupMatch =
        !fv.groupId ||
        groups?.some(
          (group) =>
            group.id === fv.groupId && group.contactIds.includes(contact.id)
        )
      return nameMatch && groupMatch
    })

    setFilteredContacts(filtered)
  }

  if (!contacts || !groups) {
    return <Spinner animation="border" />
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <Suspense fallback={<Spinner animation="border" />}>
          <FilterForm
            groupContactsList={groups}
            onSubmit={handleFilter}
            initialValues={{}}
          />
        </Suspense>
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <Suspense fallback={<Spinner animation="border" />}>
                <ContactCard contact={contact} withLink />
              </Suspense>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
