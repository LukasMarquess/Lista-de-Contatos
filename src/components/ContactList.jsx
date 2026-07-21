import { EmptyState, ListWrapper } from './ContactList.styles.js'
import ContactCard from './ContactCard.jsx'

export default function ContactList({
  contacts,
  editingContact,
  editFormData,
  onEditClick,
  onEditChange,
  onSaveEdit,
  onCancelEdit,
  onRemoveContact
}) {
  return (
    <ListWrapper>
      {contacts.length === 0 ? (
        <EmptyState>
          Nenhum alvo detectado nos parâmetros informados.
        </EmptyState>
      ) : (
        contacts.map((contact) => {
          const isEditingThis =
            editingContact && editingContact.id === contact.id

          return (
            <ContactCard
              key={contact.id}
              contact={contact}
              isEditing={isEditingThis}
              editFormData={editFormData}
              onEditClick={onEditClick}
              onEditChange={onEditChange}
              onSaveEdit={onSaveEdit}
              onCancelEdit={onCancelEdit}
              onRemoveContact={onRemoveContact}
            />
          )
        })
      )}
    </ListWrapper>
  )
}
