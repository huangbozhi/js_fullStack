function generateHashtag(str){

    return str.length> 140 || str === '' ? false : '#'+str.split(' ').map(capitalize).join(' ')

    // if(str.length>140 || str === "" ) return false
    // str += str.split(' ').map(word => word.charAt(0)+word.slice(1)).join(' ')
    // str = str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
    // str = "#" + str;
    // return str;
    // return "#" + str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}

function capitalize(word){
    return word.charAt(0).toUpperCase()+word.slice(1);
    
}

console.log(generateHashtag("hello word miss"));

// hello miss dong 
// #Hello Miss Dong