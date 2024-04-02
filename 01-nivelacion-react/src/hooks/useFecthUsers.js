import React, { useState, useEffect } from 'react'

export const useFetchUsers = () => {
    const [users, setUsers] = useState([])
    const getUsuarios = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        setUsers(data);
        console.log(data);
    } 

    useEffect(() => {
        getUsuarios();
    }, [])

    return {users};
}