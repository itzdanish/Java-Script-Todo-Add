
var ul = document.getElementById('list');
var li;


var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)




function removeItem() {
   li = ul.children
   for (let index = 0; index < li.length; index++) {
   
    while ( li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index])
    }
       
   }
   
    
}





function addItem() {
     var input = document.getElementById('input')
     var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)
    
    if (item === '') {
        return false;
    } else {
        //create li
        li = document.createElement('li')
        //create checkbox
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox';
        checkBox.setAttribute('id','check')

        //create label
        var label = document.createElement('label')
        label.setAttribute('for','item') //optional

        //add element on webpage

        ul.appendChild(label)
        li.appendChild(checkBox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0]);
        
        
        setTimeout(() => {
            li.className ='visual'
        }, 1);

        
    }

}