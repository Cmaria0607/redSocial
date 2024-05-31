import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const UsersCompany = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])



    return (
        <div className="mt-20 max-w-full flex justify-center items-center">
            <table className="w-[80%] ">
                <tr className=" border-[1px] border-black">
                    <th className=" border-[1px] border-black font-bold font-mono text-2xl">Usuarios</th>
                    <th className=" border-[1px] border-black font-bold font-mono text-2xl">Detalles</th>
                </tr>
                {data?.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td className=" border-[1px] border-gray-800 text-center text-gray-900 font-light">{user.name}</td>
                            <td className="text-center border-[1px] border-gray-800">
                                <Link to={`/UsersCompany/${user.id}`}> Detalles</Link>
                            </td>
                        </tr>
                    )
                })}

            </table>
        </div>
    )
}

export default UsersCompany