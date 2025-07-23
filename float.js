const float = document.createElement('div');
float.innerText = symbol;
float.className = 'float-symbol';
document.body.appendChild(float);
setTimeout(() => float.remove(), 2000);
