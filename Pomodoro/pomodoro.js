const tasks = [];
const time = 0;
const timer = null; // funcion de intervalo de tiempo

const addTask = document.querySelector('.button__add');
const itTask = document.querySelector('.itTask');
const form = document.querySelector('#form');


form.addEventListener('submit', event => {
    event.preventDefault();
    if (itTask.value != '' ) {
        createTask(itTask.value)
        itTask.value = '';
        listTask();
    }
})


const createTask = (value) => {
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false
    }
    
    tasks.unshift(newTask)
}

const listTask = () => {
    const html = tasks.map(task => {
       return  (`
            <div>
                <div>
                    <div>${task.completed ? `<span>Done</span>` : 
                   `<button class="start__button" data-id = ${task.id}>Start</button>`}</div>
                </div>
                
                <div>${task.title}</div>
            </div>
            `)
    })
    
    document.querySelector('.tasks').innerHTML = html.join("");
    
    const startButtons = document.querySelectorAll('.start__button');
    
    startButtons.forEach(button => {
        button.addEventListener('click', () =>{
            if(!timer){
                button.textContent = 'is processing'
            }
        });
    });
    
};

