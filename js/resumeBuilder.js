//Biography
var data = "%data%";
var bio = {
    "name": "Tri Vi",
    "role": "Software Developer",
    "contacts": {
        "mobile": "516-395-7608",
        "email": "trivi2710@gmail.com",
        "github": "TViPE",
        "location": "New York"
    },
    "biopic": "images/header_logo.png",
    "welcomeMessage": "Welcome to my page",
    "skills": ["Java", "C/C++", "Python", "HTML", "CSS", "JavaScript", "Grunt"]
};

//Displaying Bio 
bio.display = function () {

    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedContactMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedContactEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedContactGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedContactLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcomeMesg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts, #footerContacts").append(formattedContactMobile);
    $("#topContacts, #footerContacts").append(formattedContactEmail);
    $("#topContacts, #footerContacts").append(formattedContactGithub);
    $("#topContacts, #footerContacts").append(formattedContactLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMesg);
    //Displaying Skills
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();


//Work Experience
var work = {
    "jobs": [{
        "employer": "Tata Consultancy Services",
        "title": "Software Engineer",
        "dates": "09/2014 - 08/2016",
        "location": "New York, NY",
        "description": "Involved in full-stack validation of the enterprise inventory management software. Performed frontend, backend, performance, security, and usability testing. Debugged and modified existing software to correct errors/crashes. Evaluated the system under load and collaborated with developers to fix performance regressions.",
        "url": "http://www.tcs.com"
    }, {
        "employer": "Stony Brook University",
        "title": "Software Intern",
        "dates": "01/2013 - 08/2014",
        "location": "Stony Brook, NY",
        "description": "Participated in development and testing of software modules for healthcare application. Performed various code reviews and was involved in five pair programming sessions.",
        "url": "http://www.stonybrook.edu"
    }]
};

//displaying work experience
work.display = function () {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        formattedWorkEmployer = formattedWorkEmployer.replace("#", work.jobs[i].url);
        $(".work-entry:last").append(formattedWorkEmployer);
        var formattedWorkTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        $(".work-entry:last").append(formattedWorkTitle);
        var formattedWorkDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDescription = HTMLprojectDescription.replace(data, work.jobs[i].description);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};
work.display();


//displaying project
var projects = {
    "projects": [{
        "title": "Online Resume",
        "dates": "12/2016",
        "description": "The objective of this project is creating my online resume. The online resume is created on HTML, CSS, JavaScript, and JQuery.",
        "images": [],
        "url": "https://github.com/TViPE/frontend-nanodegree-resume"
	}, {
        "title": "Online Portfolio",
        "dates": "11/2016",
        "description": "The objective of this project is creating my online portfolio. This porfolio contains all of my work experinces in diffrent technology fields and my Art Portfolio.",
        "images": [],
        "url": "https://github.com/TViPE/Project_Build-A-Portfolio-Site_Tri-Vi"
	}, {
        "title": "Multitasking Alarm System",
        "dates": "09/2013 - 05/2014",
        "description": "The objective of this project is developing a multi-functional automatic home security system in Python that can detect chemical harms within the house, and notifies the homeowner wirelessly.",
        "images": [],
        "url": ""
	}, {
        "title": "C++ Data Structure & Algorithm",
        "dates": "09/2013 - 12/2013",
        "description": "The objective of this project is applying the theoretical C++ Data Structure and Algorithm into real-world problems - Developed Data Signal Filtering application in C++.",
        "images": [],
        "url": ""
	}]
};


projects.display = function () {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        formattedProjectTitle = formattedProjectTitle.replace("#",projects.projects[i].url);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);
        for(var j = 0; j<projects.projects[i].images.length; j++){
            var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedProjectImage);
        } 
    }
};

projects.display();

//displaying education
var education = {
    "schools": [{
        "name": "Stony Brook University",
        "degree": "Bachelor",
        "dates": "01/2012 - 08/2014",
        "location": "Stony Brook, New York",
        "majors": ["Electrical Engineering"],
        "url": "http://www.stonybrook.edu"
	}],
    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "Udacity",
        "dates": "2016 - Present",
        "url": "http://www.udacity.com"
	}]
};

education.display = function () {
    //display education
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name);
        //replacing URL in the fomattedSChoolName
        var formattedSchoolUrl = formattedSchoolName.replace("#", education.schools[i].url);
        $(".education-entry:last").append(formattedSchoolUrl);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        for(var j = 0; j<education.schools[i].majors.length; j++){
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors[j]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }   
    }

    //display online courses.
    for (var j = 0; j < education.onlineCourses.length; j++) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLonlineStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[j].title);
        formattedOnlineTitle = formattedOnlineTitle.replace("#", "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1");
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[j].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[j].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl = HTMLonlineURL.replace(data, education.onlineCourses[j].url);
        formattedOnlineUrl = formattedOnlineUrl.replace("#", "http://www.udacity.com");
        $(".education-entry:last").append(formattedOnlineUrl);
    }
};
education.display();

//display mapDiv
$("#mapDiv").append(googleMap);