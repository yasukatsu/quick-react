import React, {Component} from 'react'

export default class MyFile extends Component{
    constructor(props){
        super(props)
        // ファイル入力ボックスへの参照
        this.file = React.createRef()
        this.show = this.show.bind(this)
    }
    // [送信]ボタンクリック時にファイル情報をログ出力
    show(){
        const f = this.file.current.files[0]
        console.log(`ファイル名：${f.name}`)
        console.log(`種類：${f.type}`)
        console.log(`サイズ：${Math.trunc(f.size / 1024)}kB`)
    }

    render(){
        // ファイル入力ボックスを生成
        return(
            <form>
                <input type= "file" ref={this.file} />
                <button type= "button" onClick={this.show}>送信</button>
            </form>
        )
    }
}