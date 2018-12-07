
const url = 'https://thorfinnur.herokuapp.com/api/artists';
const url2 = 'data.json';
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

const form = document.querySelector('form');
form.addEventListener('submit',submitForm);
console.log(form);

function submitForm(e) {
	e.preventDefault();
	let time =  form.querySelector('.time').value;
	let temp = form.querySelector('.temp').value;
	const data = {tempeture:temp ,'time':time};
	console.log(data);
	console.log(JSON.stringify(data));
	postData(url, data);

}

function postData(url = url, data = {}) {
    return fetch(url, {
        method: "POST",
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow", 
        referrer: "no-referrer", 
        body: JSON.stringify(data), 
    })
    .then(response => response.json()); 
}

