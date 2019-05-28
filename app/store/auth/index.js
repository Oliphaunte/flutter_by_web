import { createSlice } from 'redux-starter-kit'
import initialState from './state'

const reducers = {
  fetchingAuth: (state, action) => { state.isFetching = action.payload },
  loadingAuth: (state, action) => { state.isLoading = action.payload },
  validatedAuth: (state, action) => { state.isValidated = action.payload },
  loadAuth: (state, action) => { state.data = action.payload },
  lastLoadedAuth: (state, action) => { state.lastLoadedAuth = action.payload }
}

const auth = createSlice({
  slice: 'auth',
  initialState,
  reducers
})

export default auth