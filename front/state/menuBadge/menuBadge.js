import { createSlice } from '@reduxjs/toolkit'

const menuBadgeSlice = createSlice({
  name: 'SET_NOTIFICATIONS_TOKEN',
  initialState : false,
  reducers: {
      setMenuBadge : (state, action)=> action.payload
  }
})

export const { setMenuBadge } = menuBadgeSlice.actions
export default menuBadgeSlice.reducer