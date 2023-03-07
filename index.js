function addPara() {
    var data = document.querySelector('.inp')
    var container = document.querySelector('.container')
    var node = document.createElement('p')
    var txt = document.createTextNode(data.value)
    var original = ''
    container.appendChild(node)
    node.append(txt)
    console.log(txt)
    data.value = original
    alert("Added!") 
}

function remove(){
    var para = document.querySelector('p')
    para.remove()
}