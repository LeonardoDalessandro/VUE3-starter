const FORMAT_DATE = 'MM/DD/YYYY'
const FORMAT_TIME = 'hh:mm:ss'
const FORMAT_DATETIME = 'MM/DD/YYYY hh:mm:ss'

const locale = {
  days: 'Monday_Tuesday_Wednesday_Thursday_Friday_Saturday_Sunday'.split('_'),
  daysShort: 'Mon_Tue_Wed_Thu_Fri_Sat_Sun'.split('_'),
  months: 'January_February_March_Abril_May_June_July_August_September_October_November_December'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  firstDayOfWeek: 1
}

export default {
  FORMAT_DATE,
  FORMAT_TIME,
  FORMAT_DATETIME,
  locale
}