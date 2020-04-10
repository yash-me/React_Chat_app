import React, { Component } from 'react'

class Amy extends Component{

    state = {

        user:{

            userName:'',
            userMessage:'',

        }
             

    }

    handleChange = (event) => {

        const {value} = event.target;

        this.setState((currState) => ({

            ...currState, user:{

                ...currState.user, userName:this.props.users[0].username, userMessage:value,
            }

                
                
            
        }));
    };

    isDisabled = () => {

        return (this.state.user.userMessage==='');
    }

    addUser = (event) => {

        event.preventDefault();

        this.props.addOnUser(this.state.user)
    }



    render(){

        return(

            
                <div className="chat-window">
                    <h2>Super Awesome Chat</h2>
                    <div className="name sender">{this.props.users[0].username}</div>

                    <ul className="message-list">
                        {/* {JSON.stringify(this.state.user)} */}


                    {this.props.messages.map((message, index) => (
                        <li
                        key={index}
                        className={
                            message.userName === this.props.users[0].username ? 'message sender' : 'message recipient'
                        }
                        >
                        <p>{`${message.userName}: ${message.userMessage}`}</p>
                        </li>
                    ))}
                    </ul>

                    <div>

                    <form className="input-group" onSubmit={this.addUser}>
                        
                        <input type="text"
                        className="form-control"
                        placeholder="Enter your message..."
                        value={this.state.user.userMessage}
                        onChange={this.handleChange}

                        />
                        
                        <div className="input-group-append">
                            <button className="btn submit-button" disabled={this.isDisabled()}>
                                SEND
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            

        )
    }
}

export default Amy;