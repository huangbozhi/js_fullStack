N piles bananas 每pile bananas有不同数量的 bananas

[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某一pile 里的n支香蕉，规定h小时内一定要吃完，吃每把的时候，要不吃m只，或者吃剩下的

koko bananas 
- 把香蕉吃完函数 canEatAllBanans
    h 来自于吃法规则 一小时mid只，一次只吃一把，
    return h<=H
- while 去疯狂的试 
    1 2 3 4 5 6 7 8 9 ...Math.max(...piles)

能拿到结果，速度太慢了
最大的来吗？
中间  最大概率最快的，  二分查找
二分查找优化查找的效果

简单查找 时间开销是n、
二分查找的写法有规律
x  y 要找的符合条件的min    可以来优化的
找中间  mid = x+((y-x)>>1),
小了：mid + 1 -> 新的x
大了：mid - 1 -> 新的y
log2n



