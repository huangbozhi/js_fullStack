const request = require('request');
const cheerio = require('cheerio');
var Iconv = require('iconv-lite');
var iconv = new Iconv('GBK', 'UTF-8');

function a(){
    request("https://www.smzdm.com/youhui/", (err, res) => {
        if(!err){
            // console.log(res.body);
            // decodeEntities 要不要解析 html entity
            const $ = cheerio.load(res.body, {
                decodeEntities: false
            })
            $('.list.list_preferential').each( function () {
                let title = $('.listTitle a', this).html();
                // <span></span>
                title = title.replace(/<.*>.*<\/.*>/g, '');
                const price = $('.listTitle .red', this).text();
                const img = $('.picLeft img', this).attr('src');
                const desc = $('.lrInfo', this).text().trim()
                console.log({
                    title,price,img, desc
                })
            })
        }
        
    })
}

const url = 'http://lol.qq.com/v/v2/'
function b(){
    request(url, (err, res) => {
      if(err){
        // reject(err)
        console.log(err)
      } 
      if(!err){
        var result = iconv.convert(new Buffer(res.body, 'binary')).toString();
        console.log(res.body)
        const $ = cheerio.load(result, {
            decodeEntities: false
        })
        console.log(res.body)
        $('.clearfix.mod-list.rec-video').each( function() {
            const a = $('.mod-item .figure', this).attr('href');
            console.log(a)
        })
      }
    })
}
b()


function c(){
    request({
    url,
    encoding: null
  }, (err, res) => {
    if (err) {
      // reject(err)
      console.log(err)
    }
    if (!err) {
      const body = iconv.decode(res.body, 'gbk');
      const $ = cheerio.load(body, {
        decodeEntities: false
      })
      console.log(body);
      $('.clearfix.mod-list.rec-video').each(function () {
        const a = $('.mod-item .figure', this).attr('href');
        console.log(a)
      })
    }
  })
}




