import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
            {
                id: 1,
                text: 'Ciao',
                day: '23 Maggio'
            },
            {
                id: 2,
                text: 'Come stai?',
                day: '24 Giugno'
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
