export default (value: string | number | Date) => {
  const date = new Date(value)
  const local = 'en-US'
  const options = {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }

  const newDateFormat = date.toLocaleString([local], options)

  return newDateFormat
}