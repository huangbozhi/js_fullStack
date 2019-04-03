[twitter]()
写一个函数 参数为一句话，英文的  将
- 如果字符超过140字，返回false
- 如果是空字符，也返回false
- 以#开始 
- 每个单词的首字母大写、


str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')