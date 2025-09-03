/**String Reversal**/
const reverseStringAns = (string) => string.split("").reverse().join("");
//陣列反轉


/**Palindrome**/
const isPalindrome = (str) => {
  const len = str.length;

  for (let i = 0; i < len / 2 - 1; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }

  return true;
};

const isPalindromeAns = (str) =>
  str.split("").every((e, index) => e === str[str.length - 1 - index]);
//迴圈頭尾相比、every用法(能拿index，能算固定相對index、有false就return)


/**Mean**/
const averageReducer = (arr) =>
  arr.reduce((acc, cur) => acc + cur) / arr.length;
const test = (acc, cur) => acc + cur;
//簡單的reduce()複習


/**Max Character**/
const maxC = (str) => {
  let table = {};

  for (let i of str) table[i] = table[i] + 1 || 1;

  let maxCount = 0;
  let theC = null;

  for (let [key, value] of Object.entries(table))
    if (value > maxCount) {
      maxCount = value;
      theC = [];
      theC.push(key);
    } else if (value === maxCount) {
      theC.push(key);
    }

  return theC.length===1?theC[0]:theC;
};
//創字典紀錄、更新最多次數的字母
//可試試用set,map
//挑戰一行版?
//改良版，我自己加有多個最多次數的字母的情況


/**Integer Reversal**/
const IR = int=>

     Math.sign(int)*parseInt(int.toString().split('').reverse().join(''))

//其實就是轉字串(陣列)再反轉
//學到提取正負號的Math.sign()方法


/**Converse to Capital**/
const toCapital = str => str.split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ')



/**Fibonacci Sequence**/
//遞迴就直接用語意寫。其實就是兩條分支深入到 第0項、第1項 (為停止條件)回彈，本質上就是最後算出 n-1項 , n-2項的值以相加來得到第n項的值
//迴圈寫法就不斷更新每項的值，順便中途會得到前兩項的值，也不斷更新，跑完迴圈就會得到答案
const Fibonacci = (n) => (n===0 || n===1)? n :Fibonacci(n-1) +  Fibonacci(n-2)
 
const Fibonacci2 = (n)=>{

    if(n===0 || n===1) return n 
        
    let granpa = 0
    let pa = 1
    let sum = null

    while(n>1){
 
      sum = pa+granpa;
      granpa = pa;
      pa = sum;        
      n--;
      
    }

    return sum
}

const FibonacciSequence = (n) => {


    if(n===0) return [0]
    if(n===1) return [0,1]   
        
    let res = [0,1] 

    let granpa = 0
    let pa = 1
    let sum = null
 
    while(n>1){
 
      sum = pa+granpa;
      granpa = pa;
      pa = sum;        
      n--;
      
      res.push(sum)
      
    }

    return res


}