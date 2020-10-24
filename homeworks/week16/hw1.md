``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

output :

```
1
3
5
2
4
```
![](./stack流程圖hw1.gif)

