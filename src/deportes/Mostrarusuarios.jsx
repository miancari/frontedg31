import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import styles from "*/styles.module.css";

const URI = 'http://localhost:5000/usuarios/muser/'
const URI2 = 'http://localhost:5000/usuarios/buser/'

export const CompShowUsers = () => {

    const [users, setBlog] = useState([])
    useEffect( ()=> {
        getBlogs()
    },[])

    //procedimiento para mostrar los registros
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimiento para eliminar un registro
    const deleteBlog = async (id) => {
        await axios.delete(`${URI2}${id}`)
        getBlogs()
    }

    return(
        <div className="">
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i>crear</Link>
                    <table className="table">
                        <thead className='thead tr:first-child'>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ((blog) => (
                                <tr key={ blog._id}>
                                    <td> { blog.nomuser } </td>
                                    <td> { blog.correo } </td>
                                    <td> { blog.password } </td>
                                    <td> 
                                        <Link to={`/editusuario/${blog._id}`} className=''><i className="fas fa-edit"></i>edit</Link>
                                        <button onClick={ () => deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}

export default CompShowUsers;