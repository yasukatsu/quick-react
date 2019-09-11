// 4.Reactの基本ライブラリをインポート
import React from 'react';
// 3.ロゴ画像/スタイルシートをインポート
import logo from './logo.svg';

import './App.css';
import MyHello from './MyHello';
import MyAttrMulti from './MyAttrMulti';
import MyBook from './MyBook';
import MyProp, { Member } from './MyProp';
import MyArticle from './MyArticle';


// 1.Appコンポーネントを定義
function App() {
  const time = (new Date()).toLocaleString()
  const name = "田中"
  const url = 'https://www.google.com/?hl=ja'
  const attrs = {
    src: 'http://www.wings.msn.to/image/wings.jpg',
    alt: '',
    title: 'WINGSプロジェクト'
  };
  const style = {color: 'Red', backgroundColor: 'Yellow', padding: "5px"};
  const data = {
    name: '山田権左衛門',
    age: 18,
    sex: '男',
  };
  const book = {
    isbn: 'WGS-JST-001',
    title: '速習 webpack',
    price: 454,
    published: 'WINGSプロジェクト'
  };
  const article = [
    {
      url: 'https://www.atmarkit.co.jp/ait/series/9383/',
      title: 'Angular TIPS',
      description: '超絶人気',
      isNew: true
    },
    {
      url: 'https://www.atmarkit.co.jp/ait/series/9383/',
      title: 'Angular TIPS',
      description: '超絶人気',
      isNew: true
    },
    {
      url: 'https://www.atmarkit.co.jp/ait/series/9383/',
      title: 'Angular TIPS',
      description: '超絶人気',
      isNew: true
    },
  ];

  // 2.描写内容を準備
  return (
    <div className="App">
      <header className="App-header">
        <p style={style}> Hello,World </p>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          {/* MyHelloコンポーネントにプロパティを引き渡す */}
          <MyHello />
          Reactへようこそ！
        </h1>
        <p>現在時刻は、{time}です。</p>

        <MyProp prop1={new Member()} />
        <MyProp prop2= "男" />
        <MyProp prop3= "山田太郎" />
        
        <MyAttrMulti {...data} />

        <p><a className="App-link"　href={url}>Google</a>先生に聞く</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a><br/>
        <img {...attrs} /><br/>
        <MyBook info={book} />
      </header>
      <main className="App-header">
        <dl>{article.map((article) => <MyArticle {...article} />)}</dl>
      </main>
    </div>
  );
}
// 5.Appクラスをエクスポート
export default App;
