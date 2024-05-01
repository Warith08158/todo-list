const todoList = [];

HTML();

function HTML(){
    let renderHTML = "";

    todoList.forEach((list, num) => {
        renderHTML += `
                <div class="list_items_container">
                    <div class="listItem">
                        <div class="numbering">
                            <div>${num + 1}</div>
                            <div class="point_number">.</div>
                        </div>
                            <p>${list.name}</p>
                    </div>
                        <p>${list.date}</p>
                        <button class="delete_button">Delete</button>
                </div>
        `
    });

console.log(renderHTML);

const js_listItems = document.querySelector('.js_listItems');
js_listItems.innerHTML = renderHTML;

const deleteButton = document.querySelectorAll('.delete_button');
deleteButton.forEach((button) => {
    button.addEventListener('click', () => {
        todoList.splice(button, 1);
        HTML();
    })
});
};


const addButton = document.querySelector('.js_todoAddButton');

addButton.addEventListener('click', () => {
    const js_todoNameInput = document.querySelector('.js_todoNameInput');
    const js_todoDueDateBox = document.querySelector('.js_todoDueDateBox');
    if(js_todoNameInput.value === "" && js_todoDueDateBox.value === ""){
        alert("You must write something");
    } else{
        let matchingList;
        todoList.forEach((list) => {
            if(js_todoNameInput.value === list.name && js_todoDueDateBox.value === list.date){
                matchingList = list;
            }
        });

        if(matchingList){
            alert("already exist");
        }else{
            todoList.push({
                name: js_todoNameInput.value,
                date: js_todoDueDateBox.value
            });

            HTML();
            js_todoNameInput.value = "";
            js_todoDueDateBox.value = "";
        };
    }
});
