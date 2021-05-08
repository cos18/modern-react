import React, { useState, useCallback, useRef } from 'react';

function InputSample() {
  const [infos, setInfos] = useState({
    userName: '',
    userNickname: '',
  });
  const nameInputRef = useRef();

  const { userName, userNickname } = infos;

  const onInputChange = useCallback((e) => {
    const { value, name } = e.target;
    setInfos({
      ...infos,
      [name]: value,
    });
  }, [infos]);

  const onInputReset = useCallback(() => {
    setInfos({
      userName: '',
      userNickname: '',
    });
    nameInputRef.current.focus();
  }, []);

  return (
    <div>
      <input name="userName" placeholder="이름" onChange={onInputChange} value={userName} ref={nameInputRef} />
      <input name="userNickname" placeholder="닉네임" onChange={onInputChange} value={userNickname} />
      <button onClick={onInputReset}>초기화</button>
      <div>
        <b>값: </b>
        {userName} ({userNickname})
      </div>
    </div>
  );
}

export default InputSample;