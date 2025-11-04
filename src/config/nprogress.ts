import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease', // animation easing
  speed: 500, // increment speed of the progress bar
  showSpinner: true, // whether to show loading spinner icon
  trickleSpeed: 200, // automatic increment interval
  minimum: 0.3 // minimum percentage at initialization
})

export default NProgress
