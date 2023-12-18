let val = ""
let viewItem = document.getElementById('view');

function onButtonClick(){

    // panel
    let panel1 = document.createElement('div');
    panel1.className = 'panel';
    viewItem.appendChild(panel1)

    // button
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    button1.className = 'done';
    button2.className = 'del';
    panel1.appendChild(button1);
    panel1.appendChild(button2);

    // text
    let node1 = document.createElement("span");
    node1.className = 'text'
    node1.innerHTML = document.getElementById('addtask').value;
    panel1.appendChild(node1);

    // function call
    button1.addEventListener('click', ()=>doneClick(node1))
    button2.addEventListener('click', ()=>delClick(panel1))
}

function doneClick(node){
    let str = node.innerHTML.strike();
    node.innerHTML = str;
}

function delClick(panel){
    panel.parentNode.removeChild(panel);
}

