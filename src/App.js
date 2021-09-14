import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState} from "react";

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


  return (
    <div className="container">
        <Header title='Task Tracker'/>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
