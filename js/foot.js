import { translit } from './app.js';
export const footer = document.querySelector('footer');
export const footerArray = ['Один', 'Два', 'Три'];
export const ul = document.createElement('ul');
footer.append(ul);

//css
ul.style.display = 'flex';
ul.style.justifyContent = 'space-around';
// ul.style.gap = '20px';
footer.style.padding = '10px';
// footer.style.display = 'flex';
// footer.style.justifyContent = 'space-between';
footer.style.alignItems = 'center';
footer.style.border = '1px dotted gray';



//footer menu
footerArray.forEach(el => {
  const menuA = document.createElement('a');
  menuA.href = `#${translit(el)}`;
  menuA.innerHTML = `<li>${el.toUpperCase()}</li>`;
  ul.append(menuA);
  //css
    menuA.style.color = 'red';
})