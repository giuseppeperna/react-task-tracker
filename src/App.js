import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'May 5th',
                reminder: true,
            },
            {
                id: 2,
                text: 'Food Shopping',
                day: 'May 6th',
                reminder: false,
            }
        ]
    )

    const deleteTask = (id) => {
        setTasks(tasks.filter(
            (task) => task.id !== id)
        )
    }

  return (
    <div className="container">
        <Header title='Task Tracker'/>
        { tasks.length > 0 ?
            <Tasks tasks={tasks} onDelete={deleteTask} />
        : 'No Tasks' }
    </div>
  );
}

export default App;
