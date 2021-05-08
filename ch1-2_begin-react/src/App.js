import './App.css'
import React, { useRef, useState } from 'react';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';
import Counter from './components/Counter';
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

function App() {
  const name = 'react';
  const style = {
    background: 'pink',
    color: 'black',
    fontSize: 24,
    padding: '1rem'
  }

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onInputChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [userList, setUserList] = useState([
    {
      id: 1,
      username: 'sunpark',
      email: 'sunpark@student.42seoul.kr',
      active: true
    },
    {
      id: 2,
      username: 'gim',
      email: 'gim@student.42seoul.kr',
      active: false
    },
    {
      id: 3,
      username: 'holee',
      email: 'holee@student.42seoul.kr',
      active: false
    }
  ]);

  const nextIdRef = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextIdRef.current,
      username,
      email
    };
    setUserList(userList.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextIdRef.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUserList(userList.filter(user => user.id !== id));
  };
  const onToggle = id => {
    setUserList(
      userList.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <Wrapper>
        <Hello name={name} color="red" isSpecial/>
        <Hello color="aqua" />
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
      </Wrapper>
      <Counter />
      <br/> <br/>
      <InputSample />
      <br/> <br/>
      <CreateUser
        username={username}
        email={email}
        onChange={onInputChange}
        onCreate={onCreate}
      />
      <UserList userList={userList} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
