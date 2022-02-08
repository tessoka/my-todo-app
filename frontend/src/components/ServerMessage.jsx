import React, { useState, useEffect, useContext } from 'react'
import { ServerMsgContext } from '../utility/Context'

const ServerMessage = () => {

  const { serverMsg, setServerMsg } = useContext(ServerMsgContext)
  console.log(serverMsg.isError)

  useEffect(() => {
    if (serverMsg.isVisible) {
      setTimeout(() => {
        setServerMsg({isVisible: false, isError: serverMsg.isError, msg: serverMsg.msg})
      }, 3000)
    }

  }, [serverMsg])

  return (
  <div className={serverMsg.isVisible ? "contaner-servermsg" : "contaner-servermsg hide"}>
    <div className={serverMsg.isError ? "servermsg-box status-no" : "servermsg-box status-ok"}>
      {serverMsg.msg}
    </div>
  </div>
  );
};

export default ServerMessage;
