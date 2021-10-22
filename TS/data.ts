let courses = {
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
}

let trainers = {
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
}

let assignments = {
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
}


const coursesDropdown = document.querySelector("#courses") as HTMLSelectElement;

for (const course in courses) {

    coursesDropdown.innerHTML += `
        <option value=${course}>${courses[course].name}</option>
    `;

}

const trainerDropdown = document.querySelector("#trainer") as HTMLSelectElement;

for (const trainer in trainers) {

    trainerDropdown.innerHTML += `
        <option value=${trainer}>${trainers[trainer].name}</option>
    `;

}

const assignmentDropdown = document.querySelector("#assignment") as HTMLSelectElement;

for (const assignment in assignments) {

    assignmentDropdown.innerHTML += `
        <option value=${assignment}>${assignments[assignment].name}</option>
    `;

}


/////////////////////////////////////////


let programmes = {};

let count: number = Object.keys(programmes).length + 1;
const createprogramform = document.querySelector(".form-container");
const progname = document.querySelector("#pname") as HTMLInputElement;
const dateStart = document.querySelector("#sdate") as HTMLSelectElement;
const dateEnd = document.querySelector("#edate") as HTMLSelectElement;

createprogramform.addEventListener("submit", (e) => {
    e.preventDefault();
    const programmename = progname.value;
    const coursename = coursesDropdown.value;
    const trainername = trainerDropdown.options[trainerDropdown.selectedIndex].text;
    const assignment = assignmentDropdown.options[assignmentDropdown.selectedIndex].text;

    programmes[count] = [[programmename, coursename, trainername, assignment, dateStart.value, dateEnd.value]];
    count = count + 1;
    console.log(programmes)
})