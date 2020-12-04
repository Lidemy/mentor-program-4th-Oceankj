## 為什麼我們需要 Redux？

> ###Redux is a predictable state container for JavaScript apps.

先解釋前半句話，什麼叫作**可預測的 state container**。<br>
當使用 MVC 架構時，一但專案規模變大，很容易發生以下情況，太多的 model 指向同一個 view，甚至 view 之間互相影響，你很難去預測你渲染出的結果。

![](https://static.coderbridge.com/img/techbridge/images/arvinh/flux-react-mvc.png)

而 redux 結合了 flux 的概念，使資料都先透過一個路由再去操作，使資料流變為單向。

![](https://static.coderbridge.com/img/techbridge/images/arvinh/flux-react.png)

## Redux 是什麼？
redux 只是一個管理資料流的工具，這就是為什麼後半句話會說**for JavaScript apps.**，因為 redux 並不只適用於 react ，而 react 是藉由 state 來渲染網頁，所以特別適合和 react 一起用，你可以將會影響到全域的 state 集中到 store 做管理。

根據下圖可以看到，除了解決資料流的問題，redux 也解決在 react 中 props drilling 的問題：
![](https://note.pcwu.net/assets/images/2017-03-04-redux-intro-5abe5.png)

## 可以簡介一下 Redux 的各個元件跟資料流嗎？

![](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gi)

主要由 State、Action、Reducer 組成 :

**State：**用來儲存整個應用程式的資料，由一個單一的 Object Tree 構成，以遵循 Single Source of Truth 原則。
透過 store.getState() 來取得 State。

**Action：**要改變 State 唯一的方式就是指派一個 Action，而 Action 本身就只是一個 Object，但 Action 不會直接修改 State，而是交由 Reducer 來處理。
透過 store.dispatch() 來指派 Action。

**Reducer：**Reducer 是一個 Pure Function，能夠取得當前的 State 和被指派的 Action，並且回傳一個新的 State。

####以 react 作為範例。
####初始化:

* 在 Redux store 裡面新建一個 root reducer 。
* store 呼叫 root reducer 並根據 initial state 回傳 state。
* UI 根據 state 渲染畫面，在這裡需要訂閱 store 在每次更新後，根據新的 state 渲染畫面。

####更新：

1. 當發生事件時。
2. 事件會進入 Event Handler，Dispatch 出一個 Action 指令。
3. Action 即會進入儲存資料的 Store 內，經由 Reducer 將現在的 State 和新進的 Action 結合，產生新的 State。
4. 產生新的 State 後則會連動改變 UI。



## 該怎麼把 React 跟 Redux 串起來？

```
/////////基本用法/////////

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  //傳入state，給一個初始值
  switch (action.type) {
    case "plus":
      return {
        valeu: state.value + 1,
      };
    case "minus":
      return {
        valeu: state.value - 1,
      };
    default:
      return state;
  }
}

let store = createStore(counterReducer);

//訂閱store,當 store 改變之後做的事
//拿現在的 state,store.getState())
store.subscribe(() => {
  console.log("changed!", store.getState());
});

//dispatch 內寫要做的事
store.dispatch({
  type: "plus",
});

store.dispatch({
  type: "minus",
});

```

有兩種方法，用 connect() 和 hook。

這裡附上使用 hook 的[範例](./redux範例.html)

---
> [Redux 簡介(上) — 使用 Redux 實作存錢筒功能](https://max80713.medium.com/redux-%E7%B0%A1%E4%BB%8B-%E4%B8%8A-%E4%BD%BF%E7%94%A8-redux-%E5%AF%A6%E4%BD%9C%E5%AD%98%E9%8C%A2%E7%AD%92%E5%8A%9F%E8%83%BD-dd761d8a62e8)<br>
> [Flux/Redux 超級比一比](https://www.bookstack.cn/read/reactjs101-zh-tw/Ch07-react-redux-introduction.md)<br>
> [從 Flux 與 MVC 的差異來簡介 Flux](https://blog.techbridge.cc/2016/04/29/introduce-flux-from-flux-and-mvc/)
