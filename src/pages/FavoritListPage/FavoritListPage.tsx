import { observer } from 'mobx-react-lite'
import { favoriteStore } from 'src/store/favoriteStore'
import { ContactCard } from 'src/components/ContactCard/ContactCard'
import { Col, Row } from 'react-bootstrap'

export const FavoritListPage = observer(() => {
  const favorites = favoriteStore.favorites

  if (!favorites) {
    return null
  }

  return (
    <Row xxl={4} className="g-4">
      {favorites.map((favorit) => (
        <Col key={favorit.id}>
          <ContactCard contact={favorit} withLink />
        </Col>
      ))}
    </Row>
  )
})
