const https = require('https');
const fs = require('fs');
const path = require('path')
// cheerio 服务端的 $jquery
const cheerio = require('cheerio');
const url = 'https://movie.douban.com/top250'
const imageDir = './images/'


function spiderMovies(start) {
    https.get(url + `?start=${start}`, (res) => {
        res.setEncoding('utf-8');
        // 源源不断收到数据
        let html = '';
        res.on('data', (chunk) => {
            html += chunk
            // console.log(html)
        })
        // end 是数据发送完毕
        res.on('end', () => {
            // 可以用的html
            const $ = cheerio.load(html)
            let movies = [];
            $('.item').each(function () {
                // this 在哪个作用域之内查找 - 每一个item，每一部电影
                let picUrl = $('.pic a img', this).attr('src');
                // 名字
                const title = $('.title', this).text();
                // 
                const star = $('.info .star .rating_num', this).text();
                // 入库 --- 
                const link = $('a', this).attr('href');
                const movie = {
                    title,
                    star,
                    link,
                    picUrl
                }
                movies.push(movie);
                downloadImg(picUrl)
            })
            // 文件名上标识一下，数据页数
            saveLocalData(start / 25, movies)
        })
    })
    function downloadImg(picUrl) {
        https.get(picUrl, (res) => {
            res.setEncoding('binary');
            let imageData = '';
            res.on('data', (chunk) => {
                imageData += chunk
            })
            res.on('end', () => {
                fs.writeFile(imageDir + path.basename(picUrl), imageData, 'binary', (err) => {

                    if (!err) {
                        console.log("图片保存成功", path.basename(picUrl));
                    } else {
                        console.log(err);
                    }
                })
            })
        })
    }
}

const dataDir = './moviesData/'
function saveLocalData(page,movies){
    // 文本信息
    fs.writeFile(dataDir + `data${page}.json`, JSON.stringify(movies), (err) => {
         if(!err){
                console.log('数据保存成功！')
            }else{
                console.log(err)
            }
    })  

    // for(let item of movies){
    //     fs.writeFile(dataDir + item.title, item, 'binary', (err) => {
    //         if(!err){
    //             console.log('数据保存成功！')
    //         }else{
    //             console.log(err)
    //         }
    //     })
    // }
}

// es6 generate 函数
function* doSpider(x){
    let start = 0;
    while(start < x){
        yield start
        spiderMovies(start)
        start += 25;
    }
}
for(let x of doSpider(250)){
    console.log('爬取', x)
}