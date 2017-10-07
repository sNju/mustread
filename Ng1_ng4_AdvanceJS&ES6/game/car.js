var Car=function(){

	let TotalLable=10;
	let userLable;
	
	function runCar(currentLable,callBack){
		alert(`working on ${currentLable} lable`);
		callBack();
	}
	
	function startLable(){
		userLable=prompt('enter your lable');
		
		if(userLable == TotalLable ){
				
				alert('this is final lable')
		}

		return userLable;

	}

	function Uses(lableNo){
	
			let remain = TotalLable - lableNo;
			let showBar = document.getElementById("myProgress");

			let progressBar = document.getElementById("myBar");

			let progressBarWidth=lableNo * 10;


			if((lableNo <= TotalLable && userLable!=='') && userLable!= undefined ){

				runCar(lableNo,function(){
					alert(`remain ${remain} form  10`);

					 showBar.style.display='block'; 

					 progressBar.style.width=progressBarWidth + '%';
					 progressBar.innerHTML=progressBarWidth + '%';

				})

			}else{
				if(userLable =='' || userLable ==undefined){
					alert('enter your lable')

				}else{
					alert('this lable is not available');
				}

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

let NextLable=Car();

let StartCar=function(){
	return NextLable.go();	
}
