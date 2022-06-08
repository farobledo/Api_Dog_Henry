import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, searchBorrar } from "../actions";
import { useEffect } from "react";
import '../styles/Detail.css'
import { GiDogBowl, GiDogHouse, GiSittingDog } from 'react-icons/gi'

export default function Detail(props) {
    const dispatch = useDispatch();
    const { id } = useParams(state => state.detail); // Para acceder al id del Detail

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    const myDog = useSelector((state) => state.detail);


    // vamos a crear un metodo para borrar el perro de la lista creada

    const BorrarDog = () => {
        dispatch(searchBorrar(id));
    }

     useEffect(() => {
        dispatch(searchBorrar(id));
    }, [dispatch, id]);

    return (

        <div className="divDetail">
            <div className="detail-container">
                <div className="detail-container-img">
                    <Link to='/home'><button className='buttonHome1' id='home' >Home <GiDogHouse /></button></Link>
                    <Link to='/dogs' >
                        <button className='buttonHome1' >
                            Crear Cachorro <GiSittingDog />
                        </button>
                    </Link>
                    <Link to={'/home'}><button className='buttonHome1' onClick={ BorrarDog }>Borrar <GiDogBowl /></button></Link>
                    <h1 className='name'>{myDog.name}</h1>
                    <img src={myDog.image} alt={myDog.name} className='image' />
                </div>
                <div className="detail-container-info">
                    <h4 className='caracts'>Altura</h4>
                    <p>{myDog.heightMin} - {myDog.heightMax} cm</p>
                    <h4 className='caracts'>Peso</h4>
                    <p>{myDog.weightMin} - {myDog.weightMax} kg</p>
                    <h4 className='caracts'>Esperanza de vida</h4>
                    <p className='last'>{myDog.life_span}</p>
                </div>
            </div>
            <div>

                {/* button submit para borrar el perro de la lista */}
             

            </div>
        </div>
    );
}

