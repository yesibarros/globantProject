import { createSlice } from '@reduxjs/toolkit'

const notificationsTokenSlice = createSlice({
  name: 'SET_NOTIFICATIONS_TOKEN',
  initialState : "",
  reducers: {
      setNotificationsToken : (state, action)=> action.payload
  }
})

export const { setNotificationsToken } = notificationsTokenSlice.actions
export default notificationsTokenSlice.reducer