// 1.React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';

// 2.アプリ固有のファイルをインポート
import './index.css';
import App from './App';
import MyHello from './MyHello';

// 3.キャッシュのためのサービスをインポート
import * as serviceWorker from './serviceWorker';
import MyType from './MyType';

// 4.Appコンポーネントを実行
setInterval(() => {
    ReactDOM.render(
        <React.Fragment>
            <MyType value = "山田" />
            <MyType value = {'鈴木'} />
            <MyType value = {108} />
            <MyType value = {true} />
            <MyType value = { ['うめ', 'もも', 'さくら'] } />
            <MyType value = { {name: "山田太郎", age: "25"} }/>
            <MyType value = {() => console.log('Hoge')}/>
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
