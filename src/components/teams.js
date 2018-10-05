import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const URL_TEAMS = 'http://localhost:3001/teams';



class Teams extends Component {
    constructor(props){
        super(props)
        this.state = {
            teams:[],
            filtered:[],
            keyword:''
        }
    }
    componentDidMount(){
        fetch(URL_TEAMS,{method:'GET'})
        .then(response=>response.json())
        .then(json=>{
            this.setState({
                teams:json,
                filtered:json
            })
        })

    } 
    serachTeam = (event) =>{
        const keyword = event.target.value;
        if(keyword !== ''){
            const list = this.state.teams.filter((item)=>{
                return item.name.toLowerCase().indexOf(keyword) > -1
            })
            this.setState({
                filtered:list,
                keyword
            })
        }else{
            this.setState({
                filtered:this.state.teams,
                keyword:event.target.value
            })
        }
    }
    renderList = ({filtered}) =>{
        return filtered.map((item)=>{
            return(
                <Link to={`/team/${item.name}`} key={item.id} className="team_item">
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                </Link>
            )
        })
    }
    render() {
        return (
            <div className="teams_components">
               <div className="teams_input">
                    <input 
                     type="text" 
                     value={this.state.keyword}
                     onChange={e=>this.serachTeam(e)}
                     placeholder="Serach for a team"
                     />
               </div>
               <div className="teams_container">
              
               {this.renderList(this.state)}
              
                    
               </div>
            </div>
        );
    }
}

export default Teams;