import TaskItem from './TaskItem';

import styles from './TaskList.module.css';

const TaskList = ({tasks, deleteTask}) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b)=>b.id - a.id).map(tasks => (
        <TaskItem
          key={tasks.id}
          tasks={tasks}
          deleteTask={deleteTask} 
        />
      ))
      }
    </ul>
  )
}

export default TaskList