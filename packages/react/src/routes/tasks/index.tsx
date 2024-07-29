import { TasksProvider } from "../../contexts/tasks"

const TaskList: React.FC<object> = function () {
  return (
    <TasksProvider>
      <main></main>
    </TasksProvider>
  )
}

export default TaskList
