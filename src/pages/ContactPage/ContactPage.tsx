import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { contactsStore } from 'src/store/contactsStore'
import { ContactCard } from 'src/components/ContactCard/ContactCard'
import { Col, Row, Spinner } from 'react-bootstrap'

export const ContactPage: FC = observer(() => {
  const { contactId } = useParams<{ contactId: string }>()
  const contacts = contactsStore.contacts
  const contact = contacts?.find(({ id }) => id === contactId)

  if (!contacts) return <Spinner animation="border" />
  if (!contact) return null

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        <ContactCard contact={contact} />
      </Col>
    </Row>
  )
})
