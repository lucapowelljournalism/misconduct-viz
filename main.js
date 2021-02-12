function addDataBox2 (i, finding, id) {

	//Make box with class tooltip//
	const newBox = 	document.createElement("div");
	$(newBox).addClass(`tooltip ${id}`);

	setTimeout(() => {
		$(newBox).addClass("fade-in");  //Fade effect on the boxes
	}, 250);

	//Add p element with class tooltiptext to the box
	let misconductPTag = document.createElement("p");
	$(misconductPTag).addClass("tooltiptext");
	newBox.appendChild(misconductPTag);

	//Pass finding into the p tag
	let newFinding = document.createTextNode(finding);
	misconductPTag.appendChild(newFinding); 

	document.getElementById("graphic").appendChild(newBox);
};


function addDataBox3(location){
	const newBox = 	document.createElement("div");
	$(newBox).addClass(`tooltip`);

	setTimeout(() => {
		$(newBox).addClass("fade-in");  //Fade effect on the boxes
	}, 650);

	document.getElementById(`${location}`).appendChild(newBox);
};


function writeGroups(){

	//Set up columns//
	document.getElementById("breakdown-wrapper").style.display = 'block';

	//Write into bk1 //
	for (i = 0; i < 10; i++) {
		addDataBox3('bk1')
	};

	setTimeout(()=> {console.log('waiting') }, 17000);

	//Write into bk2 //
	for (i = 0; i < 20; i++) {
		addDataBox3('bk2')
	};
	
	setTimeout(function(){ }, 3000);

	for (i = 0; i < 30; i++) {
		addDataBox3('bk3')
	};	
	
};

function removeBreakdown(){
	document.getElementById("breakdown-wrapper").style.display = 'none';
};

function removeIntro(){
	removeElement('announce');
	removeElement('title-hero');
	removeElement('caption-intro')
};

function moveBullet(counter){
	let bullets = document.getElementsByClassName('bullet');
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].style.color = 'black'; //color the inactive bullets
	 }

	//lights up next bullet//

	bullets[counter].style.color = 'crimson'; //color the active bullet

};

function removeElement(id){
	document.getElementById(id).style.display = 'none';
}

function addElement(id){
	document.getElementById(id).style.display = 'block';
}

function writeData (data, id) {
	for (i = 0; i < data.length; i++) {
		let finding = data[i]['finding_category']
		addDataBox2(i, finding, id)
}};


function clearData(){
	let startingBoxes = document.getElementsByClassName('tooltip');
	for (i = 0; i < startingBoxes.length; i++){
		startingBoxes[i].style.display = 'none';
	}

	//fade out on these boxes??
};


counter = 0 //Keeps track of where the visualization is.

function resetToBeginning(counter){
	clearData();
	removeBreakdown();
	moveBullet(counter)
	addElement('announce');
	addElement('title-hero');
}

function sceneIntro(){
	clearData();
	removeIntro()
	removeBreakdown();
}

function scene1(counter){
	removeBreakdown();
	removeIntro();
	writeData(all_data, 0);		
	moveBullet(counter);
};

function sceneGroupBreakdown(counter){
	clearData();
	removeIntro();
	writeGroups();
	moveBullet(counter)

}

function scene2(counter){
	clearData();
	removeBreakdown();
	writeData(force_data, counter);
	moveBullet(counter);
}

function scene3(counter){
	clearData();
	writeData(dwi_data, counter);
	moveBullet(counter)
};

function scene4(counter){
	clearData();
	writeData(lying_data, counter);
	moveBullet(counter);
}

function scene5(counter){
	clearData();
	writeData(firearm_data, counter);
	moveBullet(counter);
}

function scene6(counter){
	clearData();
	writeData(domesticEEO_data, counter);
	moveBullet(counter);
}

function scene7(counter){
	clearData();
	writeData(offDuty_data, counter);
	moveBullet(counter);
}

function scene8(counter){
	clearData();
	writeData(fado_data, counter);
	moveBullet(counter);
}

function scene9(counter){
	clearData();
	writeData(commandDiscipline_data, counter);
	moveBullet(counter)
}


					/*********                 *********/
					/******** SCROLL SPY LOGIC ********/
					/********                 ********/

// Stage 0: Title and header //
const watchReset = new Watch(".scroll-spy-reset");
watchReset.inView(()=>{
	counter = 0
	resetToBeginning(counter);
	console.log(`counter is at ${counter}`)
});

//Scene Intro: Text only //
const watchIntro = new Watch(".scroll-spy-intro");
watchIntro.inView(()=>{
	sceneIntro();
	console.log(`counter is at ${counter}`)
})

//	Scene 1: Base boxes //
const watch1 = new Watch(".scroll-spy-1");
watch1.inView(()=>{
	counter = 1
	removeBreakdown();
	scene1(counter);
	console.log(`counter is at ${counter}`)
	
});

//Scene Groupbreakdown : Three groupings of boxes: Minor (Command), Rules, and everything up.
const watchGroupBreakdown = new Watch(".scroll-spy-group-breakdown");
watchGroupBreakdown.inView(()=>{
	counter = 2
	sceneGroupBreakdown(counter);
	console.log(`counter is at ${counter}`)
})


const watch2 = new Watch(".scroll-spy-2");
watch2.inView(() => {
	counter = 3
	scene2(counter);
	console.log(`counter is at ${counter}`)

});

const watch3 = new Watch(".scroll-spy-3");
watch3.inView(() => {
	counter = 4
	scene3(counter);
	console.log('Interactive at Scene 3')

});

const watch4 = new Watch(".scroll-spy-4");
watch4.inView(() => {
	counter = 5;
	scene4(counter);
	console.log('At Scene 4');
});

const watch5 = new Watch(".scroll-spy-5");

watch5.inView(() => {
	counter = 6;
	scene5(counter);
	console.log('At Scene 5');
});

const watch6 = new Watch(".scroll-spy-6");

watch6.inView(() => {
	counter = 7;
	scene6(counter);
});

const watch7 = new Watch(".scroll-spy-7");

watch7.inView(() => {
	counter = 8;
	scene7(counter);
});

const watch8 = new Watch(".scroll-spy-8");

watch8.inView(() => {
	counter = 9;
	scene8(counter);
});

const watch9 = new Watch(".scroll-spy-9");
watch9.inView(() => {
	counter = 10;
	scene9(counter);
});


//Code Graveyard//

/*
document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".slide_trigger").forEach(s => {
		new Watch(s).inView(() => {
			Visualize(s.dataset.id);
			//update caption and boxes
			console.log('asdf')
		})
	});
});*/

/*function addHighlight(counter){

	//Add highlight//
	let boxes = document.getElementsByClassName(`${counter}`)
	console.log(counter)
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].classList.add('highlight');
	 }
};

function removeHighlight(){
	//Remove highlight//
	let oldBoxes = document.getElementsByClassName("tooltip")
	for (var i = 0; i < oldBoxes.length; i++) {
		oldBoxes[i].classList.remove('highlight');
	 }
}

function Visualize(){
	counter=counter + 1

	console.log(`Counter at ${counter}.`)

	if (counter === 1){
		clearData(); //Grabs all current .tooltip and sets to display=none//
		writeData(force_data, counter); //Writes x number of boxes//
		moveBullet(counter); //Moves the bullet down based on the counter position.
		/*activateButton('previous-button');*/
		/*document.getElementById('next-button').innerHTML = "Next"; //Changes button text from 'begin' to 'next'

	} else if (counter === 2){
		removeHighlight();
		writeData(dwi_data, counter);
		moveBullet(counter);

	} else if (counter === 3){
		removeHighlight();
		writeData(lying_data, counter);
		moveBullet(counter);


	} else if (counter === 4){
		removeHighlight();
		writeData(firearm_data, counter);
		moveBullet(counter);

	} else if (counter ===5){
		removeHighlight();
		writeData(domesticEEO_data, counter);
		moveBullet(counter);

	} else if (counter ===6){
		removeHighlight();
		writeData(offDuty_data, counter);
		moveBullet(counter);

	} else if (counter ===7){
		removeHighlight();
		writeData(fado_data, counter); //
		moveBullet(counter);

	} else if (counter ===8){
		removeHighlight();
		writeData(commandDiscipline_data, counter);

	} else if (counter===9){
		removeHighlight();
		/*deactivateButton('next-button');
		moveBullet(counter);
	}
};


/*function activateButton(buttonID){
	document.getElementById(`${buttonID}`).disabled = false;
};

function deactivateButton(buttonID){
	document.getElementById(`${buttonID}`).disabled = true;
};


*/