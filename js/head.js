import { translit } from './main.js';
//exports & consts
export const headerArray = ['Главная', 'Обратная связь', 'О нас'];
export const header = document.querySelector('#header');

export const logoURL = document.createElement('a');
export const logo = document.createElement('img');
logoURL.href = './'
header.append(logoURL);
logoURL.append(logo);


export const ul = document.createElement('ul');
logoURL.after(ul);



//css
ul.style.display = 'flex';
ul.style.justifyContent = 'space-around';
ul.style.gap = '20px';

header.style.padding = '10px';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';
// header.style.border = '1px solid gray';

// logo.src = 'img/logo.jpg';
logo.style.height = '35px';
logo.style.width = '55px';
logo.style.border = '1px solid gray'

//header menu
headerArray.forEach(el => {
  const menuA = document.createElement('a');
  menuA.href = `#${translit(el)}`;
  menuA.innerHTML = `<li>${el.toUpperCase()}</li>`;
  ul.append(menuA);
  //css
    menuA.style.color = 'green';
})
