/**
 *
 */
//const startTime = {
//		width: 0,
//		height: 0
//};
//
//const endTime = {
//		width: 0,
//		height: 0
//};

let a,
	b;

var x = 1000;
var y = 800;

var timer1 = document.getElementById("timer1");
function start1(){
//	startTime.height = new Date();
	console.log("start1");	// DEBUG
    timer1.style.height = "0px"; // ←widthを0pxにすることで減っていくアニメーションが始まる。
}
function stop1(){
//	endTime.height = new Date();
//
//	if(startTime.height == null) {
//		console.log("開始 -> 終了の順に押してください");
//	} else {
//		var x = endTime.height.getTime() - startTime.height.getTime();
//		console.log("経過時間(ミリ秒):", x);
//	}

	console.log("stop1");	// DEBUG
    a = timer1.offsetHeight;
    timer1.style.height = a + "px"; // ←停止の為に、現在の幅をwidthに与える。
    console.log(a);
}


//
//var s_time = null;
//
//function start1() {
//  s_time = new Date();
//}
//
//function stop1() {
//  var e_time = new Date();
//  if(s_time == null) {
//    console.log("開始 -> 終了の順に押してください");
//  } else {
//    var x = e_time.getTime() - s_time.getTime();
//    console.log("経過時間(ミリ秒):", x);
//  }
//}


var timer2 = document.getElementById("timer2");
function start2(){
	console.log("start2");	// DEBUG
    timer2.style.width = "0px"; // ←widthを0pxにすることで減っていくアニメーションが始まる。
}
function stop2(){
	console.log("stop2");	// DEBUG
    b = timer2.offsetWidth;
    timer2.style.width = b + "px"; // ←停止の為に、現在の幅をwidthに与える。
    console.log(b);
}

//
//var s_time = null;
//
//function start2() {
//  s_time = new Date();
//}
//
//function stop2() {
//  var e_time = new Date();
//  if(s_time == null) {
//    console.log("開始 -> 終了の順に押してください");
//  } else {
//    var y = e_time.getTime() - s_time.getTime();
//    console.log("経過時間(ミリ秒):", y);
//  }
//}


//ab軸の値を求めたうえで
//座標にする


//var canvas = document.getElementsByClassName("canvas");
//var x = canvas.getPropertyValue(width);




















//放物線を描いてゴミ箱へ向かう

//
//$(function() {
//	  var $target = $(".cart"), //ナビゲーションのカートボタン
//	      $cartNum = $target.find(".cartButton__num"), //カートに入れるボタン
//	      $window = $(window),
//	      targetPos, buttonPos;
//
//	  //カートに入れるボタンを押したら実行
//	  $(document).on("click", ".cartButton__button:not(.is-active)", function() {
//	    //「ナビゲーションのカートボタン」と「カートに入れるボタン」の位置を取得
//	    var $self = $(this),
//	        targetPos = $target.offset(),
//	        buttonPos = $self.offset();
//	    targetPos.top = targetPos.top - $window.scrollTop();
//	    buttonPos.top = buttonPos.top - $window.scrollTop();
//
//	    targetPos.left = targetPos.left + $target.width() / 2;
//	    buttonPos.left = buttonPos.left + $self.width() / 2;
//
//	    var G = 10, //重力[px/s^2]
//	        v = 0, //初速[px/s]
//	        H = buttonPos.top - targetPos.top, //高度[px]
//	        S = targetPos.left - buttonPos.left; //距離[px]
//
//	    calcOrbit();
//
//	    /**
//	     * 放物線の軌道を計算
//	     */
//	    function calcOrbit() {
//	      //解の存在の有無判定に使う値
//	      var b = -1 * (2 * v * v * S) / (G * S * S),
//	          c = 1 + (2 * v * v * H) / (G * S * S);
//
//	      var D = b * b - 4 * c; //0以上なら解が存在
//	      if(D >= 0) {
//	        //解が存在する場合はアニメーションを実行
//
//	        //放物線の最初の角度を算出
//	        var tanTheta0 = Math.atan((-b - Math.sqrt(D)) / 2),
//	            tanTheta1 = Math.atan((-b + Math.sqrt(D)) / 2),
//	            theta = Math.max(tanTheta0, tanTheta1);
//
//	        //アニメーションを実行
//	        startAnimation();
//	      } else {
//	        //解が存在しない場合は、初速を追加して放物線の軌道を再計算
//	        v++;
//	        calcOrbit();
//	      }
//
//	      /**
//	       * アニメーションを実行
//	       */
//	      function startAnimation() {
//	         //アニメーションさせるボールを設置
//	        $("body").append('<div class="ball" />');
//	        var $ball = $(".ball").last();
//	        $ball.css({
//	          "left": buttonPos.left + "px",
//	          "top": buttonPos.top + "px"
//	        });
//	        $self
//	          .addClass("is-active")
//	          .text("処理中");
//
//	        //アニメーション実装
//	        var startTime = performance.now();
//	        requestAnimationFrame(loop);
//	        function loop(nowTime) {
//	          var t = (nowTime - startTime) / 75, //時間を取得
//	              x = v * Math.cos(theta) * t, //横方向の位置を算出
//	              y = Math.tan(theta) * x - (G / (2 * v * v * Math.cos(theta) * Math.cos(theta))) * x * x; //縦方向の位置を算出
//	          //算出した値を基にボールの位置を移動
//	          $ball.css({
//	            "left": Math.round(buttonPos.left + x) + "px",
//	            "top": Math.round(buttonPos.top - y) + "px"
//	          });
//	          //ボールがカートボタンに到着するまでアニメーションを実行
//	          if(buttonPos.left + x < targetPos.left) {
//	            requestAnimationFrame(loop);
//	          } else {
//	            //アニメーションの終了処理
//	            $ball.remove();
//	            $target.children()
//	              .addClass("is-active");
//	            $cartNum.text(Number($cartNum.text()) + 1);
//	            $self.text("カートに入れました");
//	            var timer = setTimeout(function() {
//	              clearInterval(timer);
//	              $target.children().removeClass("is-active");
//	            }, 1000);
//	          }
//	        }
//	      }
//	    }
//
//	  });
//	});
