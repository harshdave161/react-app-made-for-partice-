import React from 'react';

const Avatarlist = (props) =>{
return(
    <div className="wrapper">
    <div className="avatar_style grow">
    <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
    <h1>{props.name}</h1>
    <p> {props.work}</p>
</div>
</div>
)
}
export default Avatarlist;