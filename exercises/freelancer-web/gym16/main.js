import './style.css'

import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<header> START BOOTSTRAP <nav >
<ul>
  <li>PORTFOLIO</li>
  <li>ABOUT</li>
  <li>CONTACT</li>
</ul>
</nav></header>
`

setupCounter(document.querySelector('#counter'))
