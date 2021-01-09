import React from 'react';


function Message(props) {
    let messages = props.messages;    
    return (
        <div className="chat__body">
            {messages.length ? (
                <div>
                {messages.map(message => (
                        <p className="chat__message">
                            <span className="chat__name">{message.name}</span>
                            {message.message}
                            <span className="chat__timestamp">{message.date}</span>
                        </p>
                    ))
                }
            </div>
            ) : (
                    <p className="chat__message">
                        <span className="chat__name">Admin</span>
                    Type in the box to send your first message
                        <span className="chat__timestamp">{new Date().toUTCString()}</span>
                    </p>
                )
            }
        </div>
    )
};
export default Message;

