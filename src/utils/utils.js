export const validateFieldsIsEmpty = (value) => {
  const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  return value.trim() && !regex.test(value)
}

export const validateFieldsIsNumber = (value) => {
  const regex = /^[0-9]*$/
  return !regex.test(value)
}