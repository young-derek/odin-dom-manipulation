const container = document.querySelector('#container');
const content = document.createElement('div');
const para = document.createElement('p');
const blueHeader = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const para2 = document.createElement('p');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

para.textContent = "Hey I'm red!";
para.style.color = "red";

blueHeader.textContent = "I'm a blue h3!";
blueHeader.setAttribute('style', 'color:blue;');

div.setAttribute("style", "border:2px solid black; background-color:pink;");

h1.textContent = "I'm in a div";

para2.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(para);
container.appendChild(blueHeader);
container.appendChild(div);
div.appendChild(h1);
div.appendChild(para2);