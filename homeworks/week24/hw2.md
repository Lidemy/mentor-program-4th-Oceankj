## Redux middleware 是什麼？
Redux Middleware 可以在 Action 被指派後（起點）進到 Reducer 前（終點）去進行額外的處理
![123](https://miro.medium.com/max/875/1*QERgzuzphdQz4e0fNs1CFQ.gif)
常用的有 redux promise,redux thunk,redux sega,redux oberservable
也可以自己寫一個 Redux middleware ，最簡單啟用它的方法是把它傳到 createStore() 作為最後一個變數。

```
let middleware = [ a, b ]
if (process.env.NODE_ENV !== 'production') {
  let c = require('some-debug-middleware')
  let d = require('another-debug-middleware')
  middleware = [ ...middleware, c, d ]
}

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middleware)
)
```

## CSR 跟 SSR 差在哪邊？為什麼我們需要 SSR？

CSR:client-side-render， 伺服器回傳的 html 檔案是“空的”，畫面內容由 JS 產生

SSR:server-side-render，伺服器直接把整個網頁建立好之後再傳給使用者，回傳的 html 檔案就可以直接看到所有資料

---
為什麼我們需要 SSR？
若都是傳送“空的”html 檔案，那搜尋引擎就很難去判斷我的網站會長怎樣，進而導致 SEO 很差，就算有的搜尋引擎會幫我先跑一段 JS 但也很難保證他是怎麼做判斷的，所以最好的方法就是在傳送 html 檔案之前在把一些對於 SEO 有幫助的資訊做SSR。

## React 提供了哪些原生的方法讓你實作 SSR？

1. renderToString(): 

```
 ReactDOMServer.renderToString(element)
```
將寫好的 react  component 作為 element 傳入，react 會回傳 HTML string ，以此做到 SSR。<br>
但這個方法只會回傳一個靜態網站，若要加入一些 event listener 則需要用到 ReactDOM.hydrate() 這個函數，React 將會保留這個 node 並只附上事件處理。

2. ReactDOMServer.renderToStaticMarkup(): 這個方法和 renderToString 很相似，不過這個方法不會建立那些額外 React 內部使用的 DOM attribute，這會讓處理速度變快，但像是 data-reactroot這樣的 attribute 也沒有，這就導致ReactDOM.hydrate() 無法使用。


[Reac](https://zh-hant.reactjs.org/docs/react-dom-server.html)
## 承上，除了原生的方法，有哪些現成的框架或是工具提供了 SSR 的解決方案？至少寫出兩種

1. Next.js
2. coren
3. hypernova


