import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';
import click from './assets/click.mp3';



const App=()=>{
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height='100vh'
      projectID={process.env.REACT_APP_Project_ID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio(click).play()}     
      />

  );
}

export default App;
