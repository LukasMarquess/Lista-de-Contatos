import { useState } from 'react'
import { ButtonContainer, EvokerButton } from '../styles'
import { maskPhone } from '../utils/maskPhone.js'
import { FormContainer, FormInput, FormTitle } from './ContactForm.styles.js'

const initialFormData = {
  nomeCompleto: '',
  email: '',
  telefone: ''
}

export default function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: name === 'telefone' ? maskPhone(value) : value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.nomeCompleto || !formData.email || !formData.telefone) {
      return
    }

    onAddContact({ ...formData, id: Date.now().toString() })
    setFormData(initialFormData)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Novo Alvo / Contato</FormTitle>
      <FormInput
        name="nomeCompleto"
        placeholder="Nome Completo"
        value={formData.nomeCompleto}
        onChange={handleChange}
        required
      />
      <FormInput
        name="email"
        type="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormInput
        name="telefone"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={handleChange}
        required
        maxLength={15}
      />

      <ButtonContainer>
        <EvokerButton type="submit">Registrar Contato</EvokerButton>
      </ButtonContainer>
    </FormContainer>
  )
}
