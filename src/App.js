import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';
import click from './assets/click.mp3';

const projectID='265996ee-6147-4f26-a9ad-270cb9865df1';

const App=()=>{
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height='100vh'
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio(click).play()}     
      />

  );
}

export default App;
