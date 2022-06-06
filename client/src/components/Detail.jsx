import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, searchDefault } from "../actions";
import { useEffect } from "react";
import '../styles/Detail.css'
import { GiDogBowl, GiDogHouse, GiSittingDog } from 'react-icons/gi'

export default function Detail(props) {
    const dispatch = useDispatch();

    //  const id = props.match.params.id; // Para acceder al id del Detail

     const {id} = useParams(state => state.detail); // Para acceder al id del Detail

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    const myDog = useSelector((state) => state.detail);

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     dispatch(searchDefault());
    // }




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
             {/* vamos hacer una Nav para ir a la home y crea un button para borrar de cachorros */}
               
                <div>
                {/* <Link to='/'><button className='buttonHome3' id='home' >Api Dog  <GiDogHouse /></button></Link> */}
                {/* <button className='buttonHome3' onClick={handleClick}>Borrar Cachorro <GiDogBowl /></button> */}
                </div>
        </div>
    );
}
//                 </div>
                     
               
//         </div>
//     );
// }

/* <Link to="/">
<button>
    <GiDogBowl />
    <p className="id">Inicio</p>
</button>
</Link>
<Link to={`/edit/${myDog.id}`}>
<button>
    <GiDogHouse />
    <p className="id">Edit</p>
</button>
</Link>
<Link to={`/delete/${myDog.id}`}>
<button>
    <GiSittingDog />
    <p className="id">Delete</p>
</button>
</Link> */


         
//         <div className='divDetail'>
//             {/* {console.log(myDog)} */}
//             <Link to='/home'><button className='buttonHome1' id='home' >Home <GiDogHouse /></button></Link>
//             <Link to='/dogs' >
//                 <button className='buttonHome1' >
//                 Crear Cachorro <GiSittingDog />
//                 </button>
//             </Link>
//             {
//                 myDog.length > 0 ?
//                     <div>
//                         <h1 className='name'>{myDog.name}</h1>
//                         <ul className='asd'>
//                             <li>
//                                 <div>
//                                     <img src={myDog.image} alt={myDog.name} className='image' />
//                                 </div>
//                             </li>
//                             <li>
//                                 <div>
//                                     <h4 className='caracts'>Temperaments:</h4>
//                                     <ul className='allTemps'>
//                                         {myDog.createdInDb ?
//                                             myDog.temperaments.map(el => {
//                                                 return <li key={el.race_temperament.temperamentId}><label>{el.name}</label></li>
//                                             }) :
//                                             myDog.temperaments ?
//                                                 myDog.temperaments.split(', ').map(el => {
//                                                     return <li key={el}><label>{el}</label></li>
//                                                 }) :
//                                                 '🤷‍♂️ No se proporcionan temperamentos para esta raza.🤷‍♀️'}
//                                     </ul>
//                                     <h4 className='caracts'>Altura</h4>
//                                     <p>{myDog.heightMin} - {myDog.heightMax} cm</p>
//                                     <h4 className='caracts'>Peso</h4>
//                                     <p>{myDog.weightMin} - {myDog.weightMax} kg</p>
//                                     <h4 className='caracts'>Esperanza de vida</h4>
//                                     <p className='last'>{myDog.life_span}</p>
                        
//                                 </div>
//                             </li>
//                         </ul>
//                     </div> :
//                     <div className='Cargando...'>
//                         <h1><strong>Espera un Momento...<GiDogBowl /></strong></h1>
//                     </div>
//             }
//         </div>
//     )
// }




// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from "react-router-dom";
// import { getDetail } from '../actions';
// import { GiDogBowl, GiDogHouse, GiSittingDog } from 'react-icons/gi';
// import '../styles/Detail.css';

// class Detail extends Component {

//     componentDidMount() {
//         const dogId = this.props.match.params.id;
//         this.props.getDetail(dogId);
//     };


//     render() {
//         return (
//             <div className='divDetail'>
//                 <Link to='/home'><button className='buttonHome1' id='home' >Home <GiDogHouse /></button></Link>
//                 <Link to='/dogs' >
//                     <button className='buttonHome1' >
//                         Create pupper <GiSittingDog />
//                     </button>
//                 </Link>
//                 {
//                     myDog.length > 0 ?
//                         <div>
//                             <h1 className='name'>{myDog[0].name}</h1>
//                             <ul className='asd'>
//                                 <li>
//                                     <div>
//                                         <img src={myDog[0].image} alt={myDog[0].name} className='image' />
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div>
//                                         <h4 className='caracts'>Temperaments:</h4>
//                                         <ul className='allTemps'>
//                                             {myDog[0].createdInDb ?
//                                                 myDog[0].temperaments.map(el => {
//                                                     return <li key={el.race_temperament.temperamentId}><label>{el.name}</label></li>
//                                                 }) :
//                                                 myDog[0].temperaments ?
//                                                     myDog[0].temperaments.split(', ').map(el => {
//                                                         return <li key={el}><label>{el}</label></li>
//                                                     }) :
//                                                     '🤷‍♂️ No temperaments provided for this breed 🤷‍♀️'}
//                                         </ul>
//                                         <h4 className='caracts'>Height</h4>
//                                         <p>{myDog[0].heightMin} - {myDog[0].heightMax} cm</p>
//                                         <h4 className='caracts'>Weight</h4>
//                                         <p>{myDog[0].weightMin} - {myDog[0].weightMax} kg</p>
//                                         <h4 className='caracts'>Life span</h4>
//                                         <p className='last'>{myDog[0].life_span}</p>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div> :
//                         <div className='loading'>
//                             <h1><strong>Come here boy...<GiDogBowl /></strong></h1>
//                         </div>
//                 }
//             </div>
//         )
//     }
// };

// function mapStateToProps(state) {
//     return {
//         dog: state.detail,
//     };
// };

// function mapDispatchToProps(dispatch) {
//     return {
//         getDetail: id => dispatch(getDetail(id)),
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Detail);