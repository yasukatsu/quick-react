// 4.Reactの基本ライブラリをインポート
import React from 'react';
// 3.ロゴ画像/スタイルシートをインポート
import logo from './logo.svg';
import './App.css';

// 1.Appコンポーネントを定義
function App() {
  const time = (new Date()).toLocaleString()
  const name = "山田"
  const url = 'https://www.google.com/?hl=ja'

  // 2.描写内容を準備
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{name}さん！Reactへようこそ！</h1>
        <p>現在時刻は、{time}です。</p>
        <p><a className="App-link"　href={url}>Google</a>先生に聞く</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// 5.Appクラスをエクスポート
export default App;
