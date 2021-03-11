import React, { Component } from 'react';
import "./comments.css";
class Comments extends Component {
    state = { 
        comments:[]
     }
     componentDidMount(){
         this.setState({
            comments: this.props.cmntArr
         })
         
     }
    render() { 
        return ( 
            <div className="comments-container">
                <div className="cmnt-btn" onClick = {() => this.props.isCommentHandler()}>
                    <button>X</button>
                </div>
                <div className="comments-container-div">
                    {this.state.comments.length > 0 ? this.state.comments.map( (cmnt) => {
                        return <div className="one-cmnt">
                            <div className="one-cmnt-img">
                                <img src={cmnt.pimage} alt=""/>
                            </div>
                            <div className="one-cmnt-name">
                                <h6>{cmnt.user_name}</h6>
                            </div>
                            <div className="one-cmnt-cmnt">
                                <h3>{cmnt.cmnt}</h3>
                            </div>
                        </div>
                    }) :
                    <h3>No Comments yet !!</h3>
                    }
                </div>
            </div>
         );
    }
}
 
export default Comments;