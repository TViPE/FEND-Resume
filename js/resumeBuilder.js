/*
This is empty on purpose! Your code to build the resume will go here.
 */ 

//Biography
var bio = {
	"name" : "Tri Vi",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "516-395-7608",
		"email" : "trivi2710@gmail.com",
		"github": "TViPE",
		"location" : "New York"
	},
	"biopic" : "images/header_logo.png",
	"welcomeMesg" : "Welcome to my page",
	"skills" : ["Java", "C/C++", "Python", "HTML", "CSS", "JavaScript", "Grunt"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Displaying Bio 
bio.display =  function(){
	var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
	//var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	//var formattedContactBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMesg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMesg);

	$("#topContacts").append(formattedContactMobile);
	$("#topContacts").append(formattedContactEmail);
	//$("#topContacts").append(formattedContactTwitter);
	$("#topContacts").append(formattedContactGithub);
	//$("#topContacts").append(formattedContactBlog);
	$("#topContacts").append(formattedContactLocation);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMesg);
	//Displaying Skills
	$("#header").append(HTMLskillsStart);
	for (var i = 0 ; i < bio.skills.length; i++){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
};
bio.display();

//Work Experience
var work = {
	"jobs" : [
	{
		"employer" : "Tata Consultancy Services", 
		"title" :  "Software Engineer",
		"dates" : "09/2014 - 08/2016",
		"location" : "New York, NY",
		"description" : [
			"Involved in full-stack validation of the enterprise inventory management software",
			"Performed frontend, backend, performance, security, and usability testing" ,
			"Debugged and modified existing software to correct errors/crashes.", 
			"Evaluated the system under load and collaborated with developers to fix performance regressions."
			],
		"url" : "http://www.tcs.com"
	}, 
	{
		"employer" : "Stony Brook University", 
		"title" :  "Software Intern",
		"dates" : "01/2013 - 08/2014",
		"location" : "Stony Brook, NY",
		"description" : [
			"Participated in development and testing of software modules for healthcare application.",
			"Performed various code reviews and was involved in five pair programming sessions."
			],
		"url" : "http://www.stonybrook.edu"

	}
	]
};

//displaying work experience
work.display = function(){
	for(var i = 0; i<work.jobs.length; i++){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		formattedWorkEmployer = formattedWorkEmployer.replace("#", work.jobs[i].url);
		$(".work-entry:last").append(formattedWorkEmployer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedWorkTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedWorkLocation);
		for (var x = 0; x < work.jobs[i].description.length; x++){
			var formattedWorkDescription = HTMLprojectDescription.replace("%data%", work.jobs[i].description[x]); 
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}
work.display();

//displaying project
var projects = {
	"projects" : [{
		"title" : "Online Resume",
		"dates" : "12/2016",
		"description" : "The objective of this project is creating my online resume. The online resume is created on HTML, CSS, JavaScript, and JQuery.",
		"image" : ""
	},{
		"title" : "Online Portfolio",
		"dates" : "11/2016",
		"description" : "The objective of this project is creating my online portfolio. This porfolio contains all of my work experinces in diffrent technology fields and my Art Portfolio.",
		"image" : ""
	},{
		"title" : "Multitasking Alarm System",
		"dates" : "09/2013 - 05/2014",
		"description" : "The objective of this project is developing a multi-functional automatic home security system in Python that can detect chemical harms within the house, and notifies the homeowner wirelessly.",
		"image" : ""
	}, {
		"title" : "C++ Data Structure & Algorithm",
		"dates" : "09/2013 - 12/2013",
		"description" : "The objective of this project is applying the theoretical C++ Data Structure and Algorithm into real-world problems - Developed Data Signal Filtering application in C++.",
		"image" : ""
	}] 
};

projects.display =  function() {
	for (var i = 0; i<projects.projects.length; i++){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
		$(".project-entry:last").append(formattedProjectImage);
	}
};

projects.display();

//displaying education
var education = {
	"schools" : [{
		"name" : "Stony Brook University",
		"degree" :  "Bachelor",
		"dates" : "01/2012 - 08/2014",
		"location" : "Stony Brook, New York",
		"major" : "Electrical Engineering",
		"url" : "http://www.stonybrook.edu"
	}],
	"onlineCourses": [{
		"title" : "Front End Web Development",
		"school" : "Udacity",
		"dates" : "2016 - Present",
		"url" : "http://www.udacity.com"
	}]
}

education.display = function() {
	//display education
	for(var i = 0; i< education.schools.length; i++){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		//replacing URL in the fomattedSChoolName
		var formattedSchoolUrl = formattedSchoolName.replace("#", education.schools[i].url);
		$(".education-entry:last").append(formattedSchoolUrl);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	
	//display online courses.
	for (var i = 0; i<education.onlineCourses.length; i++){
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLonlineStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		formattedOnlineTitle = formattedOnlineTitle.replace("#", "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1");
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		formattedOnlineUrl = formattedOnlineUrl.replace("#", "http://www.udacity.com");
		$(".education-entry:last").append(formattedOnlineUrl);
	}	
}
education.display();

//Footer Contact
footerContactDisplay = function(){
	var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedContactMobile);
	$("#footerContacts").append(formattedContactEmail);
	$("#footerContacts").append(formattedContactGithub);
	$("#footerContacts").append(formattedContactLocation);
}

footerContactDisplay();
/*
//button
$("#main").append(internationalizeButton);
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
};
*/

//display mapDiv
$("#mapDiv").append(googleMap);




