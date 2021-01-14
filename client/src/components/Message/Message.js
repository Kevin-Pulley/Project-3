import React, { useContext } from "react";
import { UserContext } from "../../utils/UserStore";
import { GroupContext } from "../../utils/GroupStore";
import { CurrentGroupContext } from "../../utils/CurrentGroupStore";

function Message(props) {
  const { userState, setUserState } = useContext(UserContext);
  const { groupState, setGroupState } = useContext(GroupContext);
  const { currentGroupState, setCurrentGroupState } = useContext(
    CurrentGroupContext
  );
  //console.log(groupState);

  let messages = currentGroupState.messages;

  return (
    <div className="chat__body">
      {messages.length ? (
        <div>
          {messages.map((message) => (
            <p className="chat__message">
              <span className="chat__name">{message.name}</span>
              {`  ${message.text}`}
              <span className="chat__timestamp">{message.date}</span>
            </p>
          ))}
        </div>
      ) : (
        <p className="chat__message">
          <span className="chat__name">Admin</span>
          Type in the box to send your first message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      )}
    </div>
  );
}
export default Message;
