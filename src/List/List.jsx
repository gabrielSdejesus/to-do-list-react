import {useState} from 'react';
import Styles from './List.module.css';
import arrowUpSvg from '../assets/svg/arrow-up-solid.svg';
import arrowDownSvg from '../assets/svg/arrow-down-solid.svg';

function List(){

    const [tasks, setTasks] = useState([])
    
    function addTask(){
        const newTask = document.getElementById('newTask').value;

        if(newTask) {
            setTasks(prevTask => [...prevTask, newTask]);
        }
    }

    function deleteTask(index){
        setTasks(prevTask => prevTask.filter((_, i) => i !== index));
    }

    function upTask(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    function downTask(index){
        if (index < (tasks.length - 1)){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className={Styles.todoContainer}>
            <div className={Styles.todoForm}>
                <input type="text" id="newTask" className={Styles.taskInput} placeholder='Enter a task...' />
                <button className={Styles.addButton} onClick={addTask}>Add</button>
            </div>
            <ul className={Styles.todoList}>
                {tasks.map((task, index) => (
                    <li key={index} className={Styles.todoItem}>
                        <span>{task}</span>
                        <button className={Styles.deleteButton} onClick={() => deleteTask(index)}>Delete</button>
                        <img src={arrowUpSvg} alt="up" className={Styles.arrowImg} onClick={() => upTask(index)} />
                        <img src={arrowDownSvg} alt="down" className={Styles.arrowImg} onClick={() => downTask(index)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;