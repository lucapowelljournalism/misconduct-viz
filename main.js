const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve,delay)) //Delay function //


counter = 0 //Keeps track of where the visualization is.
let wrote_main = false;
let wrote_force = false;
let wrote_dwi = false;
let wrote_lying = false;
let wrote_firearm = false;
let wrote_domestic = false;
let wrote_fado = false;
let wrote_offduty = false;
let wrote_minor = false;

function wnyc(){
	setTimeout(() => {
		$('#wnyc-1').addClass("fade-in");  
	}, 500);

	setTimeout(() => {
		$('#wnyc-2').addClass("fade-in");  
	}, 1000);

	setTimeout(() => {
		$('#wnyc-3').addClass("fade-in");  
	}, 1500);

	setTimeout(() => {
		$('#wnyc-4').addClass("fade-in");  
	}, 2000);

}

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
	await sleepNow(.05)
	//Write into bk1 //
	for (i = 0; i < 300; i++) {
		addDataBox3('bk1')
	};
	await sleepNow(.05)
	//Write into bk2 //
	for (i = 0; i < 80; i++) {
		addDataBox3('bk2')
	};
	await sleepNow(.05)
	for (i = 0; i < 160; i++) {
		addDataBox3('bk3')
	};	
	
};

function hideIntro(){
	hideElement('scrolltobegin');
	hideElement('title-hero');
	hideElement('caption-intro');
};

function moveBullet(counter){
	let bullets = document.getElementsByClassName('bullet');
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].style.color = 'black'; //color the inactive bullets
	 }

	//lights up next bullet//

	bullets[counter].style.color = 'crimson'; //color the active bullet	removeElement("dwi-category")

};

function hideElement(id){
	document.getElementById(id).style.display = 'none';
}

function showElement(id){
	document.getElementById(id).style.display = 'block';
}

function showFlexElement(id){
	document.getElementById(id).style.display = 'flex';
}

async function writeData (data, id,location) {
	for (i = 0; i < data.length; i++) {
		let finding = data[i]['finding_category']
		addDataBox2(i, finding, id, `${location}`)
}};



/////////////////////////////////////////////////////////////


function resetToBeginning(counter){
	if (counter === 0){
		moveBullet(counter);
		showElement('scrolltobegin');
		showElement('title-hero');
		showElement('wnyc')
		wnyc();
	}
}

function sceneIntro(){
	hideIntro();
	hideElement("graphic-main-boxes");
	hideElement('wnyc');
	hideElement('explainer');
}

function sceneExplainer(){
	showElement("explainer");

	setTimeout(() => {
		$('.explainer').addClass("fade-in"); 
	}, 500);

	showElement('police');

	setTimeout(() => {
		document.querySelector('#police').style.opacity = "1"; 
	}, 1000);

	showElement('arrow1');
	setTimeout(() => {
		document.querySelector('#arrow1').style.opacity = "1"; 
	}, 1500);

	showElement('lawyer');
	setTimeout(() => {
		document.querySelector('#lawyer').style.opacity = "1"; 
	}, 2000);

	showElement('arrow2');
	setTimeout(() => {
		document.querySelector('#arrow2').style.opacity = "1"; 
	}, 2500);

	showElement('lawyer2');
	setTimeout(() => {
		document.querySelector('#lawyer2').style.opacity = "1"; 
	}, 3000);

	showElement('wnyc-explainer');
	setTimeout(() => {
		document.querySelector('#wnyc-explainer').style.opacity = "1"; 
	}, 3500);

	showElement('arrow3');
	setTimeout(() => {
		document.querySelector('#arrow3').style.opacity = "1"; 
	}, 4000);

};

function sceneMainBoxes(counter){				
	hideIntro();
	hideElement('explainer');
	hideElement("findings-by-category");

	showElement("graphic-main-boxes");
	if (wrote_main===false){
		writeData(serious_data, "serious","graphic-main-boxes");
		writeData(rules_data, "rules","graphic-main-boxes");
		writeData(minor_data, "minor","graphic-main-boxes");

		wrote_main=true;

	} else if (wrote_main===true){
		//pass;
	};
	
	moveBullet(counter);
};

function highlightMinor(){
	$(`.minor`).addClass('highlight-minor')
}

function highlightRules(){
	$(`.rules`).addClass('highlight-rules')
}

function highlightSerious(){
	$(`.serious`).addClass('highlight-serious')
}

function scene2(counter){ 				//Force
	hideElement("graphic-main-boxes");
	hideElement("dwi-category");

	showElement("findings-by-category");   //Show section
	showFlexElement("ef-category");            //Show div

	if (wrote_force === false){
		writeData(force_data, counter, 'EF'); 
		wrote_force = true
	} else if (wrote_force === true){
		//pass
	};

	moveBullet(counter);
	
}

function scene3(counter){      					//DWI
	showFlexElement("dwi-category");				//Show the DWI category

	if (wrote_dwi === false){
		writeData(dwi_data, counter, "dwi");
		wrote_dwi = true;
	} else if (wrote_dwi === true) {
		//pass
	};

	moveBullet(counter)
	hideElement("lying-category");


};

function scene4(counter){
	showFlexElement("lying-category");
	if (wrote_lying ===false){
		writeData(lying_data, counter, "lying");
		wrote_lying = true;
	} else if(wrote_lying ===true){
		//pass
	};
	hideElement("firearm-category");
	moveBullet(counter);


}

function scene5(counter){
	showFlexElement("firearm-category");

	if (wrote_firearm === false){
		writeData(firearm_data, counter, "firearm");
		wrote_firearm = true;
	} else if (wrote_firearm === true){
		//pass
	}
	moveBullet(counter);
	hideElement("domestic-category");

}

function scene6(counter){
	showFlexElement("domestic-category");

	if (wrote_domestic ===false){
		writeData(domesticEEO_data, counter, "domestic");
		wrote_domestic = true;
	} else if (wrote_domestic === true){
		//pass;
	}

	moveBullet(counter);
	hideElement("offduty-category");

}

function scene7(counter){
	showFlexElement("offduty-category");

	if (wrote_offduty ===false){
		writeData(offDuty_data, counter, "offduty");
		wrote_offduty = true;
	} else if (wrote_offduty === true){
		//pass;
	}

	hideElement("FADO-category");
	moveBullet(counter);
}

function scene8(counter){
	showFlexElement("FADO-category");

	if (wrote_fado === false){
		writeData(fado_data, counter, "FADO");
		wrote_fado = true;
	} else if ( wrote_fado===true){
		//pass
	}

	moveBullet(counter);
	hideElement("command-category")

}

function scene9(counter){
	showFlexElement("command-category");

	if (wrote_minor===false){
		writeData(commandDiscipline_data, counter, "command");
		wrote_command = true;
	} else if (wrote_minor===true){
		//pass
	}

	moveBullet(counter);
}

////////////////////////////////////////////////////////////////////////

const watchReset = new Watch(".scroll-spy-reset");
watchReset.inView(()=>{
	counter = 0
	resetToBeginning(counter);
});

const watchIntro = new Watch(".scroll-spy-intro");
watchIntro.inView(()=>{
	sceneIntro();
})

const watchExplainer = new Watch(".scroll-spy-explainer");
watchExplainer.inView(()=>{
	sceneExplainer();
});

const watchMainBoxes = new Watch(".scroll-spy-1");
watchMainBoxes.inView(()=>{
	counter = 1
	sceneMainBoxes(counter);
});

const watchHighlight1 = new Watch(".scroll-spy-highlight1");
watchHighlight1.inView(()=>{
	counter = 2
	highlightSerious();
});

const watchHighlight2 = new Watch(".scroll-spy-highlight2");
watchHighlight2.inView(()=>{
	highlightRules();
});

const watchHighlight3 = new Watch(".scroll-spy-highlight3");
watchHighlight3.inView(()=>{
	highlightSerious();
	highlightMinor();
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


