/**
 *
 */

let a,
	b;

var x = 1000;
var y = 800;

var timer1 = document.getElementById("timer1");
function start1(){
	console.log("start1");	// DEBUG
    timer1.style.height = "0px"; // ←widthを0pxにすることで減っていくアニメーションが始まる。
}
function stop1(){
	console.log("stop1");	// DEBUG
    a = timer1.offsetHeight;
    timer1.style.height = a + "px"; // ←停止の為に、現在の幅をwidthに与える。
    console.log(a);
}

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
//ab軸の値を求めたうえで
//座標にする

//a 高加減 500px
//b 力加減 850px
//
//
//if(a=0<199){
//	switch(b){
//		case(0<299):
//			//アニメーション「どっか行く」
//			break;
//		case(300<499):
//			//アニメーション「どっか行く」
//		case(500<850):
//			//アニメーション「どっか行く」
//		}
//	}else if(a=200<499){
//		switch(b){
//			case(0<299):
//				//アニメーション「どっか行く」
//				break;
//			case(300<499):
//				//アニメーション「近くに落ちる」
//				break;
//			case(500<850):
//				//アニメーション「近くに落ちる」
//				break;
//		}
//	}else{
//		switch(b){
//		case(0<299):
//			//アニメーション「どっか行く」
//			break;
//		case(300<499):
//			//アニメーション「近くに落ちる」
//			break;
//		case(500<850):
//			//アニメーション「GOALする」
//			break;
//	}
//
//}
//
//
















//放物線を描いてゴミ箱へ向かう
