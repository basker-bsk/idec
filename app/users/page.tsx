export default async function Users() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <>
      <div className="flex flex-col  w-full">
        <a id="users"></a>
        <h4>USERS</h4>
        <ul>
          {users.map((user: any, id: number) => (
            <li key={`user-${id}`}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
