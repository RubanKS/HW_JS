const dataJS = JSON.parse(itemsData);
console.log(dataJS);
const contentDiv = document.querySelector('.content');

const imageSrc = dataJS[0].image;
console.log(imageSrc);

const contentTitle = document.createElement('h4');
contentTitle.className = 'catalog_title';
contentTitle.textContent = 'Fetured Items';
contentDiv.appendChild(contentTitle);

const contentText = document.createElement('p');
contentText.className = 'catalog_title_text';
contentText.textContent = 'Shop for items based on what we featured in this week';
contentDiv.appendChild(contentText);

// Создаем элемент <ul> с классом 'catalog'
const catalogList = document.createElement('ul');
catalogList.className = 'catalog';
contentDiv.appendChild(catalogList);

// Создаем 6 элементов <li> с классом 'catalog_item' и добавляем их в <ul>
for (let i = 1; i <= 6; i++) {
	const catalogItem = document.createElement('li');
	catalogItem.className = 'catalog_item';
	catalogList.appendChild(catalogItem);

	// Создаем элемент <a> с ссылкой '#' и добавляем его в <li>
	const itemLink = document.createElement('a');
	itemLink.href = '#';
	catalogItem.appendChild(itemLink);

	// Создаем элемент <img> с классом 'item_link', атрибутом 'src' и атрибутом 'alt' и добавляем его в <a>
	const itemImage = document.createElement('img');
	itemImage.className = 'item_link';
	itemImage.src = `${dataJS[i - 1].image}`;
	itemImage.alt = `Item_00${i}`;
	itemLink.appendChild(itemImage);

	// Создаем элемент <h4> с классом 'catalog_item_title', текстом и добавляем его в <li>
	const itemTitle = document.createElement('h4');
	itemTitle.className = 'catalog_item_title';
	itemTitle.textContent = `${dataJS[i-1].name}`;
	catalogItem.appendChild(itemTitle);

	// Создаем элемент <p> с классом 'catalog_item_text', текстом и добавляем его в <li>
	const itemText = document.createElement('p');
	itemText.className = 'catalog_item_text';
	itemText.textContent = `${dataJS[i-1].description}`;
	catalogItem.appendChild(itemText);

	// Создаем элемент <h4> с классом 'price', текстом и добавляем его в <li>
	const itemPrice = document.createElement('h4');
	itemPrice.className = 'price';
	itemPrice.textContent = `$${dataJS[i-1].price}.00`;;
	catalogItem.appendChild(itemPrice);
}

// Добавляем <ul> в тело документа
document.body.appendChild(catalogList);
