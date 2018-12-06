
const url2 = 'https://thorfinnur.herokuapp.com/api/artists';
const url = 'data.json';
document.addEventListener('DOMContentLoaded', () => {

fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } throw new Error('Villa kom upp');
      })
      .then((data) => {
      	console.log(data);
      	displayContent(data);
      })
      .catch((error) => {
      console.log(error);
      });
});

function displayContent(data) {
	const res = document.querySelector('.info');
	empty(res);
	for (let i = 0; i < data.length; i++) {
		res.appendChild(el('span', JSON.stringify(data[i])));
	}

}

function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}

function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}