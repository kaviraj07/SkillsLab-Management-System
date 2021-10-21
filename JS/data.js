var courses = {
    1: {
        name: "HTML",
    },
    2: {
        name: "CSS",
    },
    3: {
        name: "JavaScript",
    },
    4: {
        name: "TypeScript",
    }
};
var trainers = {
    1: {
        name: "John Smith",
    },
    2: {
        name: "Paul Henry",
    },
    3: {
        name: "Mark Ronny",
    },
    4: {
        name: "Harry Potter",
    }
};
var assignments = {
    1: {
        name: "Portfolio",
    },
    2: {
        name: "Covid-Tracker",
    },
    3: {
        name: "Website",
    },
    4: {
        name: "MVC Application",
    }
};
var coursesDropdown = document.querySelector("#courses");
for (var course in courses) {
    coursesDropdown.innerHTML += "\n        <option value=" + course + ">" + courses[course].name + "</option>\n    ";
}
var trainerDropdown = document.querySelector("#trainer");
for (var trainer in trainers) {
    trainerDropdown.innerHTML += "\n        <option value=" + trainer + ">" + trainers[trainer].name + "</option>\n    ";
}
var assignmentDropdown = document.querySelector("#assignment");
for (var assignment in assignments) {
    assignmentDropdown.innerHTML += "\n        <option value=" + assignment + ">" + assignments[assignment].name + "</option>\n    ";
}
/////////////////////////////////////////
var programmes = {};
var count = Object.keys(programmes).length + 1;
var assignEquipmentForm = document.querySelector(".form-container");
var progname = document.querySelector("#pname");
var dateStart = document.querySelector("#sdate");
var dateEnd = document.querySelector("#edate");
assignEquipmentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var programmename = progname.value;
    var coursename = coursesDropdown.value;
    var trainername = trainerDropdown.options[trainerDropdown.selectedIndex].text;
    var assignment = assignmentDropdown.options[assignmentDropdown.selectedIndex].text;
    programmes[count] = [[programmename, coursename, trainername, assignment, dateStart.value, dateEnd.value]];
    count = count + 1;
    console.log(programmes);
});
