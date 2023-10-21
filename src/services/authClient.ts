const TOKEN_FD: string = 'token_fd'

export const setToken = async (token: string) => {
  localStorage.setItem(TOKEN_FD, token)
}

export const getTokenLocal = () => {
  return localStorage.getItem(TOKEN_FD)
}

export const logout = () => {
  localStorage.removeItem(TOKEN_FD)
  // console.log('cheguei aqui!')
}

export const isAutheticated = () => {}
