```
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
示意圖：
![示意圖](./stack流程圖hw2.gif)

output:

```
0
1
2
3
4
5
5
5
5
5
```

