import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    editingContact: null
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload)
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    editContact: (state, action) => {
      const index = state.items.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
      state.editingContact = null
    },
    setEditingContact: (state, action) => {
      state.editingContact = action.payload
    },
    clearEditingContact: (state) => {
      state.editingContact = null
    }
  }
})

export const {
  addContact,
  removeContact,
  editContact,
  setEditingContact,
  clearEditingContact
} = contactSlice.actions

export default contactSlice.reducer
