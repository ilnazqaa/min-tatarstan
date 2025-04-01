document.querySelector('body').style.color = 'white';
const siteName = 'min-Tatarstan.ru';
document.querySelector('title').textContent = siteName;
import { header } from './head.js';
import { footer } from './foot.js';
import { postWindow } from './post.js';

//Транслит для ссылок
export function translit(word) {
    const converter = {
      'sch': 'щ',
      'yo': 'ё', 'zh': 'ж', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'ya': 'я',
      'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
      'e': 'е', 'z': 'з', 'i': 'и', 'y': 'й', 'k': 'к',
      'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
      'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
      'h': 'х', 'c': 'ц', 'y': 'ы',
    };
    for (const [value, key] of Object.entries(converter)) {
      word = word.toLowerCase().replaceAll(' ', '_').replaceAll(key, value);
    }
    return word;
  };


  document.querySelector('main').style.textAlign = 'center';
  
  

//end css
document.querySelector('body').style.opacity = 1;