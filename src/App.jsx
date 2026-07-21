import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addContact,
  removeContact,
  editContact,
  setEditingContact,
  clearEditingContact
} from './store/contactSlice'
import {
  GlobalStyle,
  Container,
  Title,
  FormContainer,
  Input,
  ButtonContainer,
  EvokerButton,
  Card,
  ContactInfo,
  SearchInput,
  CardInput
} from './styles'

const maskPhone = (value) => {
  if (!value) return ''

  let v = value.replace(/\D/g, '')

  if (v.length > 11) v = v.slice(0, 11)

  if (v.length <= 2) return v
  if (v.length <= 6) return `(${v.slice(0, 2)}) ${v.slice(2)}`
  if (v.length <= 10) return `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`

  return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`
}

export default function App() {
  const dispatch = useDispatch()
  const { items: contacts, editingContact } = useSelector(
    (state) => state.contacts
  )

  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: ''
  })

  const [searchTerm, setSearchTerm] = useState('')

  const [editFormData, setEditFormData] = useState({
    id: '',
    nomeCompleto: '',
    email: '',
    telefone: ''
  })

  const handleAddChange = (e) => {
    const { name, value } = e.target
    const maskedValue = name === 'telefone' ? maskPhone(value) : value

    setFormData({ ...formData, [name]: maskedValue })
  }

  const handleAddSubmit = (e) => {
    e.preventDefault()
    if (!formData.nomeCompleto || !formData.email || !formData.telefone) return

    dispatch(addContact({ ...formData, id: Date.now().toString() }))
    setFormData({ nomeCompleto: '', email: '', telefone: '' })
  }

  const handleEditClick = (contact) => {
    dispatch(setEditingContact(contact))
    setEditFormData(contact)
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target
    const maskedValue = name === 'telefone' ? maskPhone(value) : value

    setEditFormData({ ...editFormData, [name]: maskedValue })
  }

  const handleSaveEdit = () => {
    if (
      !editFormData.nomeCompleto ||
      !editFormData.email ||
      !editFormData.telefone
    )
      return
    dispatch(editContact(editFormData))
  }

  const handleCancelEdit = () => {
    dispatch(clearEditingContact())
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.telefone.includes(searchTerm)
  )

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>S.E.E.S. Network</Title>

        {/* Formulário APENAS para Adicionar Contatos */}
        <FormContainer onSubmit={handleAddSubmit}>
          <h3 style={{ color: '#00E6F8', marginBottom: '0.5rem' }}>
            Novo Alvo / Contato
          </h3>
          <Input
            name="nomeCompleto"
            placeholder="Nome Completo"
            value={formData.nomeCompleto}
            onChange={handleAddChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleAddChange}
            required
          />
          <Input
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleAddChange}
            required
            maxLength={15}
          />

          <ButtonContainer>
            <EvokerButton type="submit">Registrar Contato</EvokerButton>
          </ButtonContainer>
        </FormContainer>

        {/* Barra de Busca */}
        <SearchInput
          type="text"
          placeholder="Analisar base de dados... (Buscar por nome, e-mail ou telefone)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Lista de Contatos */}
        <div>
          {filteredContacts.length === 0 ? (
            <p style={{ color: '#005A70', fontStyle: 'italic' }}>
              Nenhum alvo detectado nos parâmetros informados.
            </p>
          ) : (
            filteredContacts.map((contact) => {
              const isEditingThis =
                editingContact && editingContact.id === contact.id

              return (
                <Card key={contact.id} isEditing={isEditingThis}>
                  {isEditingThis ? (
                    <>
                      <ContactInfo>
                        <CardInput
                          name="nomeCompleto"
                          value={editFormData.nomeCompleto}
                          onChange={handleEditChange}
                          placeholder="Nome"
                          required
                        />
                        <CardInput
                          name="email"
                          type="email"
                          value={editFormData.email}
                          onChange={handleEditChange}
                          placeholder="E-mail"
                          required
                        />
                        <CardInput
                          name="telefone"
                          value={editFormData.telefone}
                          onChange={handleEditChange}
                          placeholder="Telefone"
                          required
                          maxLength={15}
                        />
                      </ContactInfo>
                      <ButtonContainer>
                        <EvokerButton type="button" onClick={handleSaveEdit}>
                          Confirmar
                        </EvokerButton>
                        <EvokerButton
                          type="button"
                          danger
                          onClick={handleCancelEdit}
                        >
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
                        <EvokerButton
                          type="button"
                          onClick={() => handleEditClick(contact)}
                        >
                          Editar
                        </EvokerButton>
                        <EvokerButton
                          type="button"
                          danger
                          onClick={() => dispatch(removeContact(contact.id))}
                        >
                          Remover
                        </EvokerButton>
                      </ButtonContainer>
                    </>
                  )}
                </Card>
              )
            })
          )}
        </div>
      </Container>
    </>
  )
}
