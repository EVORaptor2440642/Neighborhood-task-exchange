import React from "react";

function Profile() {
  const user = { name: "John Doe", tasksCompleted: 5 };

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Tasks Completed: {user.tasksCompleted}</p>
    </div>
  );
}

export default Profile;