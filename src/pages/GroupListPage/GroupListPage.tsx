import { observer } from 'mobx-react-lite'
import { groupStore } from 'src/store/groupStore'
import { GroupContactsCard } from 'src/components/GroupContactsCard/GroupContactsCard'
import { Col, Row, Spinner } from 'react-bootstrap'

export const GroupListPage = observer(() => {
  const groups = groupStore.groupContacts

  if (!groups) {
    return <Spinner animation="border" />
  }

  return (
    <Row xxl={4}>
      {groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
})
