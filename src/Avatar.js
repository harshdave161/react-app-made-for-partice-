import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist0 from './Avatarlist0';
class Avatar extends Component{
    constructor(){
        super();
        this.state={
            name:"Welcome To Avatar World"
        }
    }
    namechange(){
        this.setState({
        name:" Your Subscribed man !!"
        })
    }
    render (){
            const avatarlist = [
                {
                    id:1,
                    name:"Harsh Dave",
                    work:"Web-Developer"
                },
                {
                    id:2,
                    name:"Chirag Chande",
                    work:"Web-Designer"
                },
                {
                    id:3,
                    name:"Priti Roy",
                    work:"Hair-Stylist"
                },
                {
                    id:4,
                    name:"Harry Potter",
                    work:"Magican"
                }
            ];
        
            const arrayavatarlist = avatarlist.map( (avatar,i)=>{
                return <Avatarlist0 key={i} id={avatarlist[i].id} name={avatarlist[i].name} work={avatarlist[i].work}/>
            });
        return (
            <div className="mainpage">
            <h1 className="tc"> {this.state.name} </h1>
            {arrayavatarlist}
          <button className="button" onClick={ ()=> this.namechange() }>Subcribe</button>
          </div>
        )
        }
    
}

/*
<Avatarlist0 id={avatarlist[0].id} name={avatarlist[0].name} work={avatarlist[0].work}/>
<Avatarlist0 id={avatarlist[1].id} name={avatarlist[1].name} work={avatarlist[1].work}/>
<Avatarlist0 id={avatarlist[2].id} name={avatarlist[2].name} work={avatarlist[2].work}/>
<Avatarlist0 id={avatarlist[3].id} name={avatarlist[3].name} work={avatarlist[3].work}/>
    */
export default Avatar;