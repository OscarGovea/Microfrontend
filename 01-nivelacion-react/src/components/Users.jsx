import "./Users.css"
import {useFetchUsers} from "../hooks/useFecthUsers"

const Users = () => {
    const {users} = useFetchUsers();

    return (
        <>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <th>{user.id}</th>
                            <th>{user.name}</th>
                            <th>{user.username}</th>
                            <th>{user.email}</th>
                            <th>{user.phone}</th>
                            <th><a href="user.website" target='_blank'>{user.website}</a></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Users