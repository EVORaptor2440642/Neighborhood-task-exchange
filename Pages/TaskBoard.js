import React, { useState } from "react";

function TaskBoard() {
  const [tasks] = useState([
    { id: 1, title: "Grocery Shopping", requester: "Alice" },
    { id: 2, title: "Dog Walking", requester: "Bob" },
  ]);

  return (
    <div>
      <h1>Task Board</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - Requested by {task.requester}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskBoard;