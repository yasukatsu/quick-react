// 4.Reactの基本ライブラリをインポート
import React from 'react';
// 3.ロゴ画像/スタイルシートをインポート
import logo from './logo.svg';
import './App.css';

// 1.Appコンポーネントを定義
function App() {
  // 2.描写内容を準備
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Reactへようこそ！</h1>
        <p>現在時刻は、{(new Date()).toLocaleString()}です。</p>
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
