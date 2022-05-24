const setHeader = () => {
  const accessToken = JSON.parse(localStorage.getItem('_acctoken'))

  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
}

export default setHeader
