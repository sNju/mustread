var Car=function(){

	let TotalLable=10;
	let userLable;
	
	function runCar(currentLable,callBack){
		alert(`working on ${currentLable} lable`);
		callBack();
	}
	
	function startLable(){
		userLable=prompt('enter your lable');
		
		if(userLable == TotalLable){
				
				alert('this is final lable')
		}

		return userLable;

	}

	function Uses(lableNo){
	
			let remain = TotalLable - lableNo;

			if(lableNo <= TotalLable ){

				runCar(lableNo,function(){
					alert(`remain ${remain} form  10`);
				})

			}else{
				
				alert('this lable is not available');

			}
	};

	return {

		showSomething:`total labels are ${TotalLable}`,


		changeSomething:function(change){
			this.showSomething=change;
		},

		go:function(){

			alert(this.showSomething);

			Uses(startLable());

		}
	
		};
};

var NextLable=Car();

console.log(NextLable.go())

