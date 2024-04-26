const addDate = require('date-fns / addDate')
const getDateAfterXDays = date => {
  const newDate = addDate(new Date(22, 7, 2020), date)

  return (`${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`);

  
}  
module.exports = getDateAfterXDays
