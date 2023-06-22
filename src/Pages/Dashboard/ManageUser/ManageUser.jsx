import { useQuery } from "@tanstack/react-query";


const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch(' https://sports-camp-server-eta.vercel.app/users')
    return res.json();
  })
  const handelMakeAdmin = user => {
    fetch(` https://sports-camp-server-eta.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
       
        if (data.modifiedCount) {
          refetch()

        }
      })

  }
  const handelMakeInstructor = user => {
    fetch(` https://sports-camp-server-eta.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch()

        }
      })

  }

  return (
    <div className="mt-20">
      <div className="text-xl">Total User :  {users.length}</div>

      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>#</th>
              <td>Name</td>
              <td>Email</td>
              <td>Role</td>
              <td>Role</td>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user, index) => <tr
                key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>{user.role === 'instructor' ? 'instructor' :
                  <button onClick={() => handelMakeInstructor(user)} className="text-white bg-orange-600 btn btn-ghost">Instructor</button>
                }</td>
                <td>{user.role === 'admin' ? 'admin' :
                  <button onClick={() => handelMakeAdmin(user)} className="text-white bg-orange-600 btn btn-ghost">Admin</button>
                }</td>
              </tr>

              )
            }

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default ManageUser;