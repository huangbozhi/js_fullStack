const htmlStr = '<p><em>lorem<strong>ipsum</strong></em></p>'
// 正则
const stripHTMLTags = str => str.replace(/<[^>]*><\/.>/g, '')