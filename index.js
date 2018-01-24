import './index.scss'
import moment from 'moment'

setInterval(() => {
    document.querySelector('.Time').textContent = moment().format('LTS')
}, 1000);

console.log(moment)
