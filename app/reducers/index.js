import { combineReducers } from 'redux'
import chat from './chat'
import user from './user'

export default combineReducers({ chat, user });