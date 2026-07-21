import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addContact,
  clearEditingContact,
  editContact,
  removeContact,
  setEditingContact
} from './store/contactSlice'
import { GlobalStyle, Container, Title } from './styles'
import ContactForm from './components/ContactForm.jsx'
import ContactList from './components/ContactList.jsx'
import SearchBar from './components/SearchBar.jsx'
import { maskPhone } from './utils/maskPhone.js'

export default function App() {
  const dispatch = useDispatch()
  const { items: contacts, editingContact } = useSelector(
    (state) => state.contacts
  )

  const [searchTerm, setSearchTerm] = useState('')

  const [editFormData, setEditFormData] = useState({
    id: '',
    nomeCompleto: '',
    email: '',
    telefone: ''
  })

  const handleAddContact = (contact) => {
    dispatch(addContact(contact))
  }

  const handleEditClick = (contact) => {
    dispatch(setEditingContact(contact))
    setEditFormData(contact)
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target

    setEditFormData((currentData) => ({
      ...currentData,
      [name]: name === 'telefone' ? maskPhone(value) : value
    }))
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

        <ContactForm onAddContact={handleAddContact} />

        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ContactList
          contacts={filteredContacts}
          editingContact={editingContact}
          editFormData={editFormData}
          onEditClick={handleEditClick}
          onEditChange={handleEditChange}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          onRemoveContact={(contactId) => dispatch(removeContact(contactId))}
        />
      </Container>
    </>
  )
}
