import { useState } from 'react'
import TaskList from './components/TaskList'
import CustomForm from './components/customForm'


function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) =>{
    setTasks(prevState => prevState.filter(t => t.id != id));
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask = {addTask} />
      {tasks && (
      <TaskList 
      tasks={tasks}
      deleteTask={deleteTask}
      />
      )}
    </div>
  )
}

export default App