import './App.css';
import { Component } from 'react';
import Message from './component/Message';

class App extends Component {

  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <Message title="Children!">
            これはコンポーネント内のコンテンツです。
            丸でテキストを分割し、リストにして表示します。
            改行は必要ありません。
          </Message>
        </div>
      </div>
    )
  }
}

export default App;
