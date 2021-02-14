const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve,delay)) //Delay function //


async function addDataBox2 (i, finding, id,location) {

	const newBox = 	document.createElement("div");
	$(newBox).addClass(`tooltip ${id}`);

	setTimeout(() => {
		$(newBox).addClass("fade-in");  
	}, 250);

	let misconductPTag = document.createElement("p");
	$(misconductPTag).addClass("tooltiptext");
	newBox.appendChild(misconductPTag);

	let newFinding = document.createTextNode(finding);
	misconductPTag.appendChild(newFinding); 

	document.getElementById(`${location}`).appendChild(newBox);
};


function addDataBox3(location){
	const newBox = 	document.createElement("div");
	$(newBox).addClass(`tooltip`);
	setTimeout(() => {
		$(newBox).addClass("fade-in"); 
	}, 650);

	document.getElementById(`${location}`).appendChild(newBox);
};

async function writeGroups(){

	document.getElementById("breakdown-wrapper").style.display = 'block';

	//Write into bk1 //
	for (i = 0; i < 300; i++) {
		await sleepNow(.05)
		addDataBox3('bk1')
	};

	setTimeout(()=> {console.log('waiting') }, 17000);

	//Write into bk2 //
	for (i = 0; i < 80; i++) {
		await sleepNow(.05)
		addDataBox3('bk2')
	};
	
	setTimeout(function(){ }, 3000);

	for (i = 0; i < 160; i++) {
		await sleepNow(.05)
		addDataBox3('bk3')
	};	
	
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

	bullets[counter].style.color = 'crimson'; //color the active bullet	removeElement("dwi-category")

};

function removeElement(id){
	document.getElementById(id).style.display = 'none';
	document
}

function addElement(id){
	document.getElementById(id).style.display = 'block';
}

async function writeData (data, id,location) {
	for (i = 0; i < data.length; i++) {
		let finding = data[i]['finding_category']
		/*await sleepNow(.0001)*/
		addDataBox2(i, finding, id, `${location}`)
}};


function clearData(){
	let startingBoxes = document.getElementsByClassName('tooltip');
	for (i = 0; i < startingBoxes.length; i++){
		startingBoxes[i].style.display = 'none';
	}

	//fade out on these boxes??
};

function clearCategoryData(boxId){
	let startingBoxes = document.getElementsByClassName(`${boxId}`);
	for (i = 0; i < startingBoxes.length; i++){
		startingBoxes[i].style.display = 'none';
	}

	//fade out on these boxes??
};


counter = 0 //Keeps track of where the visualization is.

function resetToBeginning(counter){
	if (counter === 0){
		clearData();
		removeElement("breakdown-wrapper")
		moveBullet(counter);
		addElement('announce');
		addElement('title-hero');
	}
}

function sceneIntro(){
	clearData();
	removeIntro()
	removeElement("breakdown-wrapper")
}

function scene1(counter){
	removeElement("breakdown-wrapper")
	removeIntro();
	clearData();
	writeData(all_data, 0,"graphic");		
	moveBullet(counter);
};

function sceneGroupBreakdown(counter){
	clearData();
	removeIntro();
	removeElement("findings-by-category");
	writeGroups();
	moveBullet(counter)

}

function scene2(counter){ 				//Force
	clearData();
	removeElement("breakdown-wrapper");
	removeElement("dwi-category");

	addElement("findings-by-category");
	addElement("ef-category");
	writeData(force_data, counter, 'EF');
	moveBullet(counter);

	removeElement("dwi-category");
	clearCategoryData("4")
}

function scene3(counter){      			//DWI
	addElement("dwi-category");
	removeElement("lying-category");
	clearCategoryData("5")
	writeData(dwi_data, counter, "dwi");
	moveBullet(counter)
};

function scene4(counter){
	addElement("lying-category");
	removeElement("firearm-category")
	clearCategoryData("6")
	writeData(lying_data, counter, "lying");
	moveBullet(counter);
}

function scene5(counter){
	addElement("firearm-category");
	removeElement("domestic-category");
	clearCategoryData("7")
	writeData(firearm_data, counter, "firearm");
	moveBullet(counter);
}

function scene6(counter){
	addElement("domestic-category");
	removeElement("offduty-category");
	clearCategoryData("8")
	writeData(domesticEEO_data, counter, "domestic");
	moveBullet(counter);
}

function scene7(counter){
	addElement("offduty-category");
	removeElement("FADO-category");
	clearCategoryData("9")
	writeData(offDuty_data, counter, "offduty");
	moveBullet(counter);
}

function scene8(counter){
	addElement("FADO-category");
	removeElement("command-category")
	writeData(fado_data, counter, "FADO");
	moveBullet(counter);
}

function scene9(counter){
	addElement("command-category");
	writeData(commandDiscipline_data, counter, "command");
	moveBullet(counter)
}

const watchReset = new Watch(".scroll-spy-reset");
watchReset.inView(()=>{
	counter = 0
	resetToBeginning(counter);
});

const watchIntro = new Watch(".scroll-spy-intro");
watchIntro.inView(()=>{
	sceneIntro();
})

const watch1 = new Watch(".scroll-spy-1");
watch1.inView(()=>{
	counter = 1
	scene1(counter);
});

const watchGroupBreakdown = new Watch(".scroll-spy-group-breakdown");
watchGroupBreakdown.inView(()=>{
	counter = 2
	sceneGroupBreakdown(counter);
});


const watch2 = new Watch(".scroll-spy-2");
watch2.inView(() => {
	counter = 3
	scene2(counter);
});

const watch3 = new Watch(".scroll-spy-3");
watch3.inView(() => {
	counter = 4
	scene3(counter);
});

const watch4 = new Watch(".scroll-spy-4");
watch4.inView(() => {
	counter = 5;
	scene4(counter);
});

const watch5 = new Watch(".scroll-spy-5");

watch5.inView(() => {
	counter = 6;
	scene5(counter);
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


