import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./navBar.css"
class NavBar extends Component {
    state = {
        search:""
    }
    onChangeHandler = (e) =>{
        // console.log(e.target.value);
        this.setState({
            search: e.target.value
        })
    }
    onSaveHandler = () =>{
        if(this.state.search){
            let searchUser = this.props.searchUser;
            // console.log(this.props.searchUser);
            let word = this.state.search;
            searchUser(word);
            this.setState({
                search: ""
            })
            // console.log(word);
        }
    }
    render() { 
        return ( 
            <React.Fragment>
            {this.props.isAuth && <React.Fragment> 
                    <div className="nav">
                    <div className="navLogo">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="img"/>
                    </Link>
                </div>
                        <div className="navSearch">
                        <input value = {this.state.search} type="text" placeholder = "🔎search" onChange = {(e) => this.onChangeHandler(e)}/>
                   
                        <Link to = "/follow">
                            <button onClick = {() => this.onSaveHandler()}>search</button>
                        </Link>
                    </div>
                <div className="navIcons">
                    <div className="nav-home">
                        <Link to="/">
                            <i class="fas fa-home"></i>
                        </Link>
                    </div>
                    <div className="nav-upload">
                        <Link to="/uploadPost">
                            <i class="fas fa-upload"></i>
                        </Link>
                    </div>
                    <div className="nav-profile">
                        <Link to="/profile">
                            <i class="fas fa-user-alt"></i>
                        </Link>
                    </div>
                    <div className="nav-setting">
                        <Link to="/setting">
                            <i class="fas fa-cog"></i>
                        </Link>
                    </div>
                    <Link to="/login">
                        <div className="nav-logout" onClick={this.props.logout}>
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                    </Link>
                </div>
                </div>
                </React.Fragment>}
                </React.Fragment>
         );
    }
}
 
export default NavBar;