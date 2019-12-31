import React from "react";
// import store from '../store'
import { connect } from "react-redux";

const mapStateToProps = state => ({ num: state });
const mapDispatchToProps = {
    add: () => ({ type: "add" }),
    minus: () => ({ type: "minus" }),
    asyncAdd: () => dispatch => {
        // 做异步操作
        setTimeout(() => {
            dispatch({ type: "add" });
        }, 1500);
    },
};
// function写法
// function ReduxTest({ num, add, minus }) {
//     return (
//         <div>
//             <p>{num}</p>
//             <div>
//                 <button onClick={minus}>-</button>
//                 <button onClick={add}>+</button>
//             </div>
//         </div>
//     )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)

// 装饰器写法
@connect(mapStateToProps, mapDispatchToProps)
class ReduxTest extends React.Component {
    render() {
        const { num, minus, add, asyncAdd } = this.props;
        return (
            <div>
                <p>{num}</p>
                <div>
                    <button onClick={minus}>-</button>
                    <button onClick={add}>+</button>
                    <button onClick={asyncAdd}>asyncAdd</button>
                </div>
            </div>
        );
    }
}

export default ReduxTest;
