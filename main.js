
writeData(all_data, 0);
removeHighlight();

function addDataBox2 (i, finding, id) {

	//Make box with class tooltip//
	const newBox = 	document.createElement("div");
	$(newBox).addClass(`tooltip highlight ${id}`);

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


function addHighlight(counter){

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

function moveBullet(counter){
	//lights up next bullet//
	let bullets = document.getElementsByClassName('bullet');
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].style.color = 'black'; //color the inactive bullets
	 }
	bullets[counter].style.color = 'crimson'; //color the active bullet

};


/*function activateButton(buttonID){
	document.getElementById(`${buttonID}`).disabled = false;
};

function deactivateButton(buttonID){
	document.getElementById(`${buttonID}`).disabled = true;
};*/



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

function captionCheck(counter){
	if (counter === 1){
		document.getElementById(`caption1`).innerHTML = 'The documents show over 800 misconduct findings.';
	} else if (counter === 1){
		document.getElementById(`caption1`).innerHTML = 'The department had 13 cases of excessive force.';
	} else if (counter ===2){
		document.getElementById(`caption2`).innerHTML = 'The department had 6 cases of misconduct related to officers driving under the influence (DWI).';
	} else if (counter ===3){
		document.getElementById(`caption3`).innerHTML = 'The department substantiated 20 instances of officers lying or issuing misleading or inaccurate statements.';
	} else if (counter ===4){
		document.getElementById(`caption4`).innerHTML = 'The department had 15 cases of firearm related misconduct, such as when an officer accidentally shoots a gun. In one instance, an officer let an 18-year old take his firearm in order to take a photo with it.';
	} else if (counter ===5){
		document.getElementById(`caption5`).innerHTML = 'Two substantiated investigations were related to domestic violence. In one case, an officer threatened a woman with arrest in an attempt to get her not to press charges against another resident, presumably her partner.';
	} else if (counter ===6){
		document.getElementById(`caption6`).innerHTML = 'Another twenty cases involved off-duty misconduct. Many of these involved officers leaving the scenes of a crimes, in some cases under the influence.';
	} else if (counter ===7){
		document.getElementById(`caption7`).innerHTML = '28 findings were FADO, which stands for Force, Abuse of Authority, Discourtesy and Offensive Language.';
	} else if (counter ===8){
		document.getElementById(`caption8`).innerHTML = 'The remaining 400 plus misconduct findings were minor misconduct violations, including anything from missing a department phone to skipping traffic court.';
	} else if (counter ===9){
		document.getElementById(`caption9`).innerHTML = 'The findings give a slim window into the breadth of misconduct findings that will become available once 50-a is repealed in court.';
}};


function Visualize(){
	counter=counter + 1
	console.log(`Counter at ${counter}.`)

	if (counter === 1){
		clearData();
		writeData(force_data, counter);
		moveBullet(counter);
		/*activateButton('previous-button');*/
		/*document.getElementById('next-button').innerHTML = "Next"; //Changes button text from 'begin' to 'next'*/

		captionCheck(counter);

	} else if (counter === 2){
		removeHighlight();
		writeData(dwi_data, counter);
		moveBullet(counter);
		captionCheck(counter);

	} else if (counter === 3){
		removeHighlight();
		writeData(lying_data, counter);
		moveBullet(counter);

		captionCheck(counter);

	} else if (counter === 4){
		removeHighlight();
		writeData(firearm_data, counter);
		moveBullet(counter);
		captionCheck(counter);

	} else if (counter ===5){
		removeHighlight();
		writeData(domesticEEO_data, counter);
		moveBullet(counter);
		captionCheck(counter);

	} else if (counter ===6){
		removeHighlight();
		writeData(offDuty_data, counter);
		moveBullet(counter);
		captionCheck(counter);

	} else if (counter ===7){
		removeHighlight();
		writeData(fado_data, counter); //
		moveBullet(counter);
		captionCheck(counter);

	} else if (counter ===8){
		removeHighlight();
		writeData(commandDiscipline_data, counter);
		moveBullet(counter);
		captionCheck(counter);

	} else if (counter===9){
		removeHighlight();
		/*deactivateButton('next-button');*/
		captionCheck(counter);
		moveBullet(counter);
	}
	/// Add remaining Data groups
};

function previous(){

	console.log(`Counter moved back to ${counter-1} because you hit the previous button`); //tracker

	//Delete boxes that were just written//
	let oldBoxes = document.getElementsByClassName(`${counter}`);
	for (i = 0; i < oldBoxes.length; i++){
		oldBoxes[i].style.display = 'none'
	}

	//Check that the counter is not zero before moving the counter back. If it is zero, keeps the counter at zero.
	if (counter != 0) {
		counter = counter - 1
	};

	//rehighlight boxes that were previously highlighted

	addHighlight(counter);
	captionCheck(counter);
	moveBullet(counter);


	if (counter===0){
		deactivateButton("previous-button");
		writeData(all_data, 0);
		removeHighlight();
	
	} else if (counter ===8) {
		activateButton("next-button");
	}

};

/******** SCROLL SPIES ********/

const watch1 = new Watch(".scroll-spy-1");

watch1.oneInView(() => {
	Visualize();
	document.getElementById('caption').style.display = 'none';
});

const watch2 = new Watch(".scroll-spy-2");

watch2.oneInView(() => {
	Visualize();
});

const watch3 = new Watch(".scroll-spy-3");

watch3.oneInView(() => {
	Visualize();
});

const watch4 = new Watch(".scroll-spy-4");

watch4.oneInView(() => {
	Visualize();
});

const watch5 = new Watch(".scroll-spy-5");

watch5.oneInView(() => {
	Visualize();
});

const watch6 = new Watch(".scroll-spy-6");

watch6.oneInView(() => {
	Visualize();
});

const watch7 = new Watch(".scroll-spy-7");

watch7.oneInView(() => {
	Visualize();
});

const watch8 = new Watch(".scroll-spy-8");

watch8.oneInView(() => {
	Visualize();
});

const watch9 = new Watch(".scroll-spy-9");

watch9.oneInView(() => {
	Visualize();
});



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


/*Counter guide*/

//Counter at 0 means base visualization of all data

//Counter at 1 means show force data

//Counter at 2 means show DWI data//