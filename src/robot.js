// Declare the globals
let robot = document.getElementById('robot');
let xPos, yPos, direction;

//Start logging
let reportLog = document.getElementById("reportLog");

// Set the robot's start position and direction according to the input values

function placeRobot() {

    let x = document.getElementById("x");
    let y = document.getElementById("y");
    let f = document.getElementById("f");
    xPos = parseInt((x.options[x.selectedIndex].value));
    yPos = parseInt((y.options[y.selectedIndex].value));
    direction = (f.options[f.selectedIndex].text);

    robot.style.display = "block";
    robot.style.left = xPos + "%";
    robot.style.top = yPos + "%";
    robot.className = direction;
	report();
}

//Move the robot in its current facing direction
function move() {
    if (Board()) {
        if (direction == "North") {
            if (yPos > 0) {
                yPos -= 20;
                robot.style.top = yPos + "%";
            }

        } else if (direction == "South") {
            if (yPos < 80) {
                yPos += 20;
                robot.style.top = yPos + "%";

            }
        } else if (direction == "East") {
            if (xPos < 80) {
                xPos += 20;
                robot.style.left = xPos + "%";


            }
        } else if (direction == "West") {
            if (xPos > 0) {
                xPos -= 20;
                robot.style.left = xPos + "%";
            }
        }
        if ((xPos == 80 && direction == "East") || (yPos == 80 && direction == "South") || (xPos == 0 && direction == "West") || (yPos == 0 && direction == "North")) {
			console.log("Change direction!");
			robot.classList.add("edge");

        } else if ((xPos != 80 && direction == "East") || (yPos != 80 && direction != "South") || (xPos != 0 && direction != "West") || (yPos != 0 && direction != "North")) {
        	robot.classList.remove("edge");
        
        }
        if (reportLog.style.visibility == "visible") {
            reportLog.innerHTML = `PLACE  ${xPos}, ${yPos}, ${direction}`
        }
    } else {
        console.log("Your robot fell!!");
    }
	report();

}

//turn to the left
function turnLeft() {
    if (Board()) {
        if (direction == "North") {
            direction = "West"
        } else if (direction == "West") {
            direction = "South"
        } else if (direction == "South") {
            direction = "East";
        } else if (direction == "East") {
            direction = "North"
        }
        robot.className = direction;
    } else {
        console.log("Your robot fell!!");
    }
}

//turn to the right
function turnRight() {
    if (Board()) {
        if (direction == "North") {
            direction = "East";

        } else if (direction == "West") {
            direction = "North"
        } else if (direction == "South") {
            direction = "West"
        } else if (direction == "East") {
            direction = "South"

        }
        robot.className = direction;
    } else {
        console.log("Your robot fell!!");
    }
}

//This helps locate your robot
function report() {
    reportLog.innerHTML = `PLACE  ${xPos}, ${yPos}, ${direction}`
}

// Checks whether tour robot is still on the table
function Board() {

    let dir = ["North", "West", "East", "South"];

    if (!dir.includes(direction) || xPos < 0 || xPos > 80 || yPos < 0 || yPos > 80)
        return false;
    return true;
}