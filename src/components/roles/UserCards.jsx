import React from "react";

export default function UserCards({ users }) {
  if (users.length === 0) return <p>No hay usuarios en este rol.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map((user) => (
        <div key={user.id} className="bg-white p-4 rounded shadow">
          <h4 className="text-lg font-bold">{user.name}</h4>
          <p>Email: {user.email}</p>
          <p>Teléfono: {user.phone}</p>
        </div>
      ))}
    </div>
  );
}
