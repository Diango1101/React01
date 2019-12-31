import React from "react";
import logo from "./logo.svg";
// import './App.css'
import Clock from "./Component/Clock";
import CartSample from "./Component/CartSample";
import AntdTest from "./Component/AntdTest";
import CommentList from "./Component/CommentList";
import Hoc from "./Component/Hoc";
import Composition from "./Component/Composition";
import HookTest from "./Component/HookTest";
import ContextTest from "./Component/ContextTest";
import KForm from "./Component/KForm";
import ReduxTest from "./Component/ReduxTest";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Clock></Clock>
                <CartSample title="购物车"></CartSample>
            </header> */}

      {/* <AntdTest></AntdTest>
            <CommentList></CommentList>
            <Hoc></Hoc>
             <Composition></Composition>
            <HookTest></HookTest>
            <ContextTest></ContextTest> */}

      {/* 自制表单 */}
      {/* <KForm></KForm> */}
      <Provider store={store}>
        <ReduxTest></ReduxTest>
      </Provider>
    </div>
  );
}

export default App;
