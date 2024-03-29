// Reactの基本ライブラリをインポート
import React from 'react';
// ロゴ画像/スタイルシートをインポート
import logo from './logo.svg';

// 4.ルーティング関連の機能をインポート
import {BrowserRouter as Router, Link, Route} from "react-router-dom"

import {BrowserRouter as  NavLink} from "react-router-dom"

import './App.css';
import MyHello from './MyHello';
import MyAttrMulti from './MyAttrMulti';
import MyBook from './MyBook';
import MyProp, { Member } from './MyProp';
import MyArticle from './MyArticle';
import MyEvent from './MyEvent';
import MyState from './MyState'
import MyPool from './MyPool'
import MyParent from './MyParent'
import MyForm from './MyForm';
import MyTextarea from './MyTextarea';
import MySelect from './MySelect';
import MyList from './MyList';
import MyRadio from './MyRadio';
import MyCheck from './MyCheck';
import MyCheckMulti from './MyCheckMulti';
import MyFile from './MyFile';
import MyLife from './MyLIfe';
import MyTopic from './MyTopic';

// 1.Appコンポーネントを定義
function App() {
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
  const articles = [
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
      isNew: false
    },
    {
      url: 'https://www.atmarkit.co.jp/ait/series/9383/',
      title: 'Angular TIPS',
      description: '超絶人気',
      isNew: true
    },
  ];

  const list = articles.map((article) =>
    <MyArticle {...article} key={article.index}/>
  );
  
  const current={color: 'Yellow'}

  // 2.描写内容を準備
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p style={style}> Hello,World </p>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {/* MyHelloコンポーネントにプロパティを引き渡す */}
            <MyHello />
            Reactへようこそ！
          </h1>
          <MyState />

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
          <dl>
            {list}
          </dl>
          <MyEvent greet="Hello" />
          <MyPool /><br/>
          <MyParent /><br/>
          <MyForm /><br/>
          <MyTextarea /><br/>
          <MySelect /><br/>
          <MyList /><br/>
          <MyRadio /><br/>
          <MyCheck /><br/>
          <MyCheckMulti /><br/>
          <MyFile /><br/>
          <MyLife /><br/>
          {/* ルーティング経由のリンクリストを準備 */}
          <ul>
            <li><Link to="/">Hello</Link></li>
            <li><Link to="/life" activeStyle={current}>Time</Link></li>
            <li><Link to="/textarea">Textarea</Link></li>
          </ul>
          <ul>
            {/* 2. ルートパラメーター付きのリンク */}
            <li><Link to="/topic/13">記事No.13</Link></li>
            <li><Link to="/topic/108">記事No.108</Link></li>
          </ul>
          <ul>
            <li><NavLink exact to="/" activeStyle={current}>トップ</NavLink></li>
            <li><NavLink to="/hello" activeStyle={current}>Hello2</NavLink></li>
          </ul>
          {/* ルーティング設定（条件にマッチしたコンポーネントを出力） */}
            <Route exact path="/" component={MyHello} />
            <Route path="/life" component={MyLife} />
            <Route path="/textarea" component={MyTextarea} />
          {/* 1. ルートパラメーターを含んだルート */}
            <Route component={MyHello} />
            <Route path="/topic/:id" component={MyTopic} /> 
        </main>
      </div>
    </Router>
  );
}
// 5.Appクラスをエクスポート
export default App;
