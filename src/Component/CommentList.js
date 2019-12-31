import React, { Component } from "react"

// 容器组件
export default class CommentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                comments: [
                    { body: "oh you can well dance", author: "kiko" },
                    { body: "oh you can dance well", author: "lal" }
                ]
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => (
                    // 方法一
                    // <Comment key={i} data={c} />
                    // 方法二
                    <Comment key={i} {...c} />
                ))}
            </div>
        )
    }
}
// 新版本用momo函数组件化
// memo高阶组件  16.6以后
const Comment = React.memo(function(data) {
    console.log("render comment")
    return (
        <div>
            <p>{data.body}</p>
            <p>------{data.author}</p>
        </div>
    )
})

// 展示组件
// function Comment({ data }) {
//     console.log('render comment')
//     return (
//         <div>
//             <p>{data.body}</p>
//             <p>------{data.author}</p>
//         </div>
//     )
// }

// 第二种解决重复刷新相同数据问题方法  继承pureComponent

// class Comment extends React.PureComponent {
//     // 第一种解决重复刷新相同数据问题方法
//     // shouldComponentUpdate(nextProps) {
//     //     if (
//     //         nextProps.data.body === this.props.data.body &&
//     //         nextProps.data.author === this.props.data.author
//     //     ) {
//     //         return false
//     //     }
//     //     return true
//     // }

//     render() {
//         console.log('render comment')
//         return (
//             <div>
//                 {/* 方法一 */}
//                 {/* <p>{this.props.data.body}</p>
//                 <p>------{this.props.data.author}</p> */}
//                 {/* 方法二 */}
//                 <p>{this.props.body}</p>
//                 <p>------{this.props.author}</p>
//             </div>
//         )
//     }
// }
