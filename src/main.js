import { items, itemValue, li, button } from './variable';

const addItem = () => {
    li.innerHTML = itemValue;
    items.appendChild(li);
    // document.getElementById('task').value = '';
    console.log(itemValue)
}

button.addEventListener('click', addItem);

