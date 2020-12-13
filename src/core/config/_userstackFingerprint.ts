const userstackOptions = 'ua=Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,like Gecko)Chrome/85.0.4183.121Safari/537.36OPR/71.0.3770.323'
  
/*
** !! USERSTACK FREE PLAN does not support HTTPS Encryption !!
*/
const userstackAPIfreePlan = `http://api.userstack.com/api/detect?access_key=${process.env.USERSTACK_KEY}&${userstackOptions}`

const userstackAPIpremiumPlan = `https://api.userstack.com/api/detect?access_key=${process.env.USERSTACK_KEY}&${userstackOptions}`

export default {
  userstackAPIfreePlan,
  userstackAPIpremiumPlan
}