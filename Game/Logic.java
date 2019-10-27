
public class Logic {


//Level 1 廃墟    右下GoaL
//Level 2 路地裏  右寄り中心寄りGoaL
//Level 3 住宅街  右上GoaL

	//a 高加減 500px
	//b 力加減 850px

if(Level1) {
//Level 1 廃墟    右下GoaL
if(a=0<199){
	switch(b){
		case(0<299):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(300<499):
			//アニメーション「out」<img src="<img src="/Game/ゴミ箱アニメーション/haikyo-animation-out.gif">
			break;
		case(500<850):
			//アニメーション「in」<img src="/Game/ゴミ箱アニメーション/haikyo-animation-in.gif">
			break;
		}
	}else if(a=200<499){
		switch(b){
			case(0<299):
				//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
				break;
			case(300<499):
				//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
				break;
			case(500<850):
				//アニメーション「out」<img src="/Game/ゴミ箱アニメーション/haikyo-animation-out.gif">
				break;
		}
	}else{
		switch(b){
		case(0<299):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(300<499):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(500<850):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
	}

}
}else if(Level2){
//Level 2 路地裏  右寄り中心寄りGoaL
if(a=0<199){
	switch(b){
		case(0<299):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(300<499):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(500<850):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		}
	}else if(a=200<499){
		switch(b){
			case(0<299):
				//アニメーション「out」<img src="/Game/ゴミ箱アニメーション/rojiura-animation-out.gif">
				break;
			case(300<499):
				//アニメーション「in」<img src="/Game/ゴミ箱アニメーション/rojiura-animation-in.gif">
				break;
			case(500<850):
				//アニメーション「out」<img src="/Game/ゴミ箱アニメーション/rojiura-animation-out.gif">
				break;
		}
	}else{
		switch(b){
		case(0<299):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(300<499):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(500<850):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
	}

}
}else {
//Level 3 住宅街  右上GoaL
if(a=0<199){
	switch(b){
		case(0<299):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(300<499):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(500<850):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		}
	}else if(a=200<499){
		switch(b){
			case(0<299):
				//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
				break;
			case(300<499):
				//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
				break;
			case(500<850):
				//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
				break;
		}
	}else{
		switch(b){
		case(0<299):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/animation-out.gif">
			break;
		case(300<499):
			//アニメーション「どっか行く」<img src="/Game/ゴミ箱アニメーション/juutakugai-animation-out.gif">
			break;
		case(500<850):
			//アニメーション「in」<img src="/Game/ゴミ箱アニメーション/juutakugai-animation-in.gif">
			break;
	}

}
}
}


