let todoButton = document.getElementById("todo-button")
todoButton.onclick = addToList
function addToList(e) {
    e.preventDefault()
    let input = document.getElementById('todo-input')
    if (input.value == '') {
        alert('Input Field is Empty')
    } else {
        let li = document.createElement('li')
        let t = document.createTextNode(input.value)
        li.appendChild(t)
        document.getElementById('todo-list').appendChild(li)
        li.className = 'list-item'
        clearButton.style.display = 'block'
        input.value = ''
    }
    let listItems = document.getElementsByTagName('li')
    for (let i = 0; i < listItems.length; i++) {
        let closeItem = document.createElement('span')
        let cancelIcon = document.createElement('i')
        cancelIcon.className = 'fa fa-close'
        closeItem.appendChild(cancelIcon)

        closeItem.className = 'item-close'
        listItems[i].appendChild(closeItem)
    }
    let closeIcon = document.getElementsByClassName('item-close')
    console.log(closeIcon)
    for (i in closeIcon) {
        closeIcon[i].onclick = function () {
            let div = this.parentElement
            div.style.display = 'none'
        }
    }
    let listItem = document.getElementsByTagName('li')
    for (i in listItem) {
        listItem[i].onclick = function () {
            if (this.classList.contains('completed')) {
                return
            } else {
                this.className = 'completed'
                let completeIcon = document.createElement(i)
                completeIcon.className = 'fa fa-check'
                this.appendChild(completeIcon)
            }
        }
    }
}


let clearButton = document.getElementById('clear-list')
clearButton.onclick = clearList
if (document.getElementById('todo-list').innerHTML == '') {
    clearButton.style.display = 'none'
}
function clearList() {
    document.getElementById('todo-list').innerHTML = ''
    clearButton.style.display = 'none'
}