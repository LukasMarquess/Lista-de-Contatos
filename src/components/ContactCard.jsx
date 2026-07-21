import { ButtonContainer, EvokerButton } from '../styles'
import { Card, CardInput, ContactInfo } from './ContactCard.styles.js'

export default function ContactCard({
  contact,
  isEditing,
  editFormData,
  onEditClick,
  onEditChange,
  onSaveEdit,
  onCancelEdit,
  onRemoveContact
}) {
  return (
    <Card isEditing={isEditing}>
      {isEditing ? (
        <>
          <ContactInfo>
            <CardInput
              name="nomeCompleto"
              value={editFormData.nomeCompleto}
              onChange={onEditChange}
              placeholder="Nome"
              required
            />
            <CardInput
              name="email"
              type="email"
              value={editFormData.email}
              onChange={onEditChange}
              placeholder="E-mail"
              required
            />
            <CardInput
              name="telefone"
              value={editFormData.telefone}
              onChange={onEditChange}
              placeholder="Telefone"
              required
              maxLength={15}
            />
          </ContactInfo>
          <ButtonContainer>
            <EvokerButton type="button" onClick={onSaveEdit}>
              Confirmar
            </EvokerButton>
            <EvokerButton type="button" danger onClick={onCancelEdit}>
              Cancelar
            </EvokerButton>
          </ButtonContainer>
        </>
      ) : (
        <>
          <ContactInfo>
            <p>
              <strong>NOME:</strong> {contact.nomeCompleto}
            </p>
            <p>
              <strong>E-MAIL:</strong> {contact.email}
            </p>
            <p>
              <strong>TEL:</strong> {contact.telefone}
            </p>
          </ContactInfo>
          <ButtonContainer>
            <EvokerButton type="button" onClick={() => onEditClick(contact)}>
              Editar
            </EvokerButton>
            <EvokerButton
              type="button"
              danger
              onClick={() => onRemoveContact(contact.id)}
            >
              Remover
            </EvokerButton>
          </ButtonContainer>
        </>
      )}
    </Card>
  )
}
