import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:5000/usuarios/mevento/'
const URI2 = 'http://localhost:5000/usuarios/upevento/'

export const ComEditarEvento = () => {
    const [fecha, setFecha] = useState ('')
    const [equipo1, setEquipo1] = useState ('')
    const [equipo2, setEquipo2] = useState ('')
    const [marcador1, setMarcador1] = useState ('')
    const [marcador2, setMarcador2] = useState ('')
    const [tipoevento, setTipoEvento] = useState ('')
    const navigate = useNavigate()
    const {id} = useParams()
    console.log('El valor del id es: ', id)

    //Procedimiento para actualizar

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(URI2+id, {
            fecha: fecha,
            equipo1: equipo1,
            equipo2: equipo2,
            marcador1: marcador1,
            marcador2: marcador2,
            tipoevento: tipoevento
        })
        navigate('/meventos')
    }

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setFecha(res.data.fecha)
        setEquipo1(res.data.equipo1)
        setEquipo2(res.data.equipo2)
        setMarcador1(res.data.marcador1)
        setMarcador2(res.data.marcador2)
        setTipoEvento(res.data.tipoevento)
    }

    useEffect( ()=>{
        getBlogById()
     },[ ] )

    return(
        <div>
            <h3>Editar Evento</h3>
            <form>

                <div>
                    <label>Fecha</label>
                    <input
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
                        type="text"
                    />
                </div>
                
                <div>
                    <label>Equipo 1</label>
                    <input
                        value={equipo1}
                        onChange={ (e) => setEquipo1(e.target.value)}
                        type="text"
                    />
                </div>

                <div>
                    <label>Equipo 2</label>
                    <input
                        value={equipo2}
                        onChange={ (e) => setEquipo2 (e.target.value)}
                        type="text"
                    />
                </div>
                
                <div>
                    <label>Marcador 1</label>
                    <input
                        value={marcador1}
                        onChange={ (e) => setMarcador1 (e.target.value)}
                        type="text"
                    />
                </div>
                
                <div>
                    <label>Marcador 2</label>
                    <input
                        value={marcador2}
                        onChange={ (e) => setMarcador2 (e.target.value)}
                        type="text"
                    />
                </div>
                
                <div>
                    <label>Tipo De Evento</label>
                    <input
                        value={tipoevento}
                        onChange={ (e) => setTipoEvento (e.target.value)}
                        type="text"
                    />
                </div>

                <button type="submit" onClick={onSubmit}>Actualizar</button>

            </form>
        </div>
    )
}

export default ComEditarEvento;