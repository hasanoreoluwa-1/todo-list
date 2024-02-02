$(document).ready(function () {
    if ($('#todo-list').html() == '') {
        $('#clear-list').hide()
    }
    $('#todo-button').click(function () {
        let todoInput = $('#todo-input').val()
        if (todoInput == '') {
            alert('Input field is Empty!')
        } else {
            $('#todo-list').append(`<li class='list-item'> ${todoInput} <span class="item-close"><i class="fa fa-close"></i></span></li>`)
            $('#todo-input').val('')
            $('#clear-list').show()
        }

        $('.list-item').click(function () {
            $(this).toggleClass('completed')
        })

        $('.item-close').click(function () {
            $(this).parent().remove()
            if ($('#todo-list').html() == '') {
                $('#clear-list').hide()
            }
        })
    })
    $('#clear-list').click(() => {
        $('#todo-list').empty()
    })
})