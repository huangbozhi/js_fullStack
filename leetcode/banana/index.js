/**
 * 
 * @param { number[] } piles
 * @param { number } H
 * @return { number }
 */

function minEatingSpeed(piles,H){
    let lo = 1;
    let hi = Math.max(...piles);
    console.log(hi);
    while (lo <= hi) {
        //  lo的尝试
        let mid = lo + ((hi-lo)>>1);
        // 验证m正好可以
        console.log('-----', mid);
        if (canEatAllBananas(piles,H,mid)) {
            hi = mid-1;
        }else{
            lo=mid+1;  //   将最小值改为中间值加一
        }
    }
    return lo;
}

/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function canEatAllBananas(piles,H,mid){
// 一定是H小时
    let h = 0;
    for(let pile of piles){
        h += Math.ceil(pile / mid);  //向上取整 3.1-》4
    }
    return h <= H;
}

// console.log(canEatAllBananas([3,7,6,11],8,4));
console.log(minEatingSpeed([3,7,6,11],8));
