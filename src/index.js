// 1.React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';

// 2.アプリ固有のファイルをインポート
import './index.css';
import App from './App';

// 3.キャッシュのためのサービスをインポート
import * as serviceWorker from './serviceWorker';

const tag = (
    <label htmlFor="name" className="sky">
        <input id="name" type="text" tabIndex="0" />
    </label>
)
const str = 'Hello, World!! <br /> goodbye, me'
const style = {color: 'Red', backgroundColor: 'Yellow'};
const attrs = {
    src: 'http://www.wings.msn.to/image/wings.jpg',
    alt: '',
    title: 'WINGSプロジェクト'
};

// 4.Appコンポーネントを実行
setInterval(() => {
    ReactDOM.render(
        <React.Fragment>
            <img {...attrs} />
            <p dangerouslySetInnerHTML={{__html: str}}></p>
            <p style={style}>プロジェクト</p>
            <p>{tag}さん！Reactを始めよう！</p>
            <App />
        </React.Fragment>,
        document.getElementById('root')
    );
}, 1000);

// 5.サービスを有効化
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
