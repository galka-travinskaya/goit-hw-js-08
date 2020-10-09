const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' },
  ];
  
  /*
   * 
   * 
   * 
   */
            //   1. Рендерим разметку элементов списка
const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

const createListItemsMarkup = (items) => {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);
console.log(listItemsMarkup);
refs.list.innerHTML = listItemsMarkup;
            // 2. Слушаем изменение фильтра (по буквам фильтруем все)
refs.input.addEventListener('input', onFilterChange);
            // 4. Можно добавить throttle или debounce
// refs.input.addEventListener('input', ._debuonce(onFilterChange, 500));

function onFilterChange (evt) {
    const filter = evt.target.value.toLowerCase();
    
    const filteredItems = tech.filter(t => 
        t.label.toLowerCase().includes(filter)
        );
        // 3. Фильтруем данные и рендерим новые элементы, добавляем populateList(listItemsMarkup);
        const listItemsMarkup = createListItemsMarkup(filteredItems);
        refs.list.innerHTML = listItemsMarkup;
        populateList(listItemsMarkup);
}

function populateList(markup) {
    refs.list.innerHTML = markup;
}