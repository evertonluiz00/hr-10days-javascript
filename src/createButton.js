var myButton = document.createElement('Button');
myButton.id = 'btn';
myButton.innerHTML = '0';
document.body.appendChild(myButton);

myButton.onclick = function() {
    let count = Number(myButton.textContent);
    btn.innerHTML = count + 1;
}