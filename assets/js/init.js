
// // パララックス
const rellax = new Rellax('.rt', { //クラス名rellax-targetにパララックス効果
  callback: function(positions) {
    // callback every position change
    console.log(positions);},
  speed: 2,
  center: true,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});