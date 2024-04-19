import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { contactsStore } from 'src/store/contactsStore'
import { groupStore } from 'src/store/groupStore'
import { ContactCard } from 'src/components/ContactCard/ContactCard'
import { GroupContactsCard } from 'src/components/GroupContactsCard/GroupContactsCard'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { Col, Row } from 'react-bootstrap'

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>()
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>()
  const contacts = contactsStore.contacts
  const groupContactsData = groupStore.groupContacts

  useEffect(() => {
    const currentGroupContacts = groupContactsData?.find(
      ({ id }) => id === groupId
    )

    setGroupContacts(currentGroupContacts)
  }, [groupId, groupContactsData])

  if (!groupContacts || !contacts) return null

  return (
    <Row className="g-4">
      <Col xxl={12}>
        <Row xxl={3}>
          <Col className="mx-auto">
            <GroupContactsCard groupContacts={groupContacts} />
          </Col>
        </Row>
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
