todoList = JSON.parse(localStorage.getItem('todoList')) || [];
dispList();

function addTodo()
 {
    const inputElementName = document.querySelector('.js-name-input');
    const name = inputElementName.value;
    const inputElementDuedate = document.querySelector('.js-due-date-input');
    const duedate = inputElementDuedate.value;
    todoList.push({name,duedate});

    localStorage.setItem('todoList',JSON.stringify(todoList));

    console.log(todoList);
    inputElementName.value = '';
    inputElementDuedate.value = 'dd-mm-yyyy';
    dispList();
}

function dispList()
{
    let disp = ``;
    for (let i=0; i<todoList.length; i++)
    {
        disp += `
            <div>${todoList[i].name}</div> 
            <div>${todoList[i].duedate}</div>
            <button class="delete-todo-button" onclick="deleteTodo(${i});">
                Delete
            </button>
            `;
    }
    document.querySelector('.js-todo-list').innerHTML = disp;
}

function deleteTodo(i)
{
    todoList.splice(i,1);

    localStorage.setItem('todoList',JSON.stringify(todoList));

    dispList();
}