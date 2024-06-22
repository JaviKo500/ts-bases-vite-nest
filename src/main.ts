import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import { charmander } from './bases/03-class.ts'
// import { charmander } from './bases/04-injections'
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators-dep'
// import { bulbasaur, pokemonsIds } from './bases/02-objects.ts'
// import { name, templateString } from './bases/01-types.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
    ${charmander.name}
    </div>
    <p class="read-the-docs">
      ${''}
    </p>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
