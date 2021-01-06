const readline = require('readline').createInterface({
  input: process.stdin,
  output:process.stdout
});
readline.question(`请输入两个数从大到小,逗号(英文)隔开: `, (data)=>{
  var args = data.split(',')
  goc(args[0], args[1]);
  readline.close();
})

const args = process.argv.slice(2);
// goc(args[0],args[1]);

//最大公约数
function goc(a, b){
  if(b == 0){
    return;
  }
  while(true){
    r = a % b;
    if(r == 0) break;
    a = b;
    b = r;
  }
  console.log(b)
  return b;
}
//递归最大公约数
function getGcd(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    if (max % min === 0) {
        return min;
    } else {
        return getGcd(max % min, min);
    }
}
//最小公倍数
function getLcm(a, b) {
  return a * b / getGcd(a, b);
}
