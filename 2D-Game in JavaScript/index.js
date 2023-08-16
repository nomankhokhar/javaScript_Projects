// Basic Setup
const canvas = document.createElement("canvas");
document.querySelector(".myGame").appendChild(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;
const context = canvas.getContext("2d");


let difficulty = 2;
const form = document.querySelector("form");
const scoreBoard = document.querySelector(".scoreBoard");

// Basic Functions

// Event Listener for Difficulty form

document.querySelector("input").addEventListener("click", (e) => {
    e.preventDefault();

    // Invisible and visible

    form.style.display = "none";
    scoreBoard.style.display = "block";
    const userValue = document.getElementById("difficulty").value;


    if (userValue === "Easy") {
        setInterval(spawnEnemy, 2000);
        return (difficulty = 5);
    }

    if (userValue === "Medium") {
        setInterval(spawnEnemy, 1400);
        return (difficulty = 8);
    }

    if (userValue === "Hard") {
        setInterval(spawnEnemy, 1000);
        return (difficulty = 10);
    }

    if (userValue === "Insane") {
        setInterval(spawnEnemy, 700);
        return (difficulty = 12);
    }
})


// ----------------------- Creating Player, Enemy , Weapon , Etc Classes  ---------

playerPosition = {
    x: canvas.width / 2,
    y: canvas.height / 2
}


// Player Class


class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }


    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
        context.fillStyle = this.color;
        context.fill();
    }

    update() {
        this.x += Math.random() * 10;
        this.y += Math.random() * 10;
    }
}



// Weapon Class


class Weapon {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity
    }


    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
        context.fillStyle = this.color;
        context.fill();
    }

    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

}



// Enimies Class

class Enimies {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity
    }


    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
        context.fillStyle = this.color;
        context.fill();
    }

    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

}

// Main Geomatery Start from Here

const nomi = new Player(playerPosition.x, playerPosition.y, 15, `rgb(${Math.random() * 250} , ${Math.random() * 250},${Math.random() * 250})`);

const weapons = [];
const enimies = [];


// Spawn Enemy at Random Locations

const spawnEnemy = () => {
    const enemySize = Math.random() * (40 - 5) + 5;
    const enemyColor = `rgb(${Math.random() * 250} , ${Math.random() * 250},${Math.random() * 250})`;

    let random;

    if (Math.random() < 0.5) {
        random = {
            x: Math.random() < 0.5 ? canvas.width + enemySize : 0 - enemySize,
            y: Math.random() * canvas.height,
        }
    }
    else {
        random = {
            x: Math.random() * canvas.width,
            y: Math.random() < 0.5 ? canvas.height + enemySize : 0 - enemySize,
        }
    }



    const myAngle = Math.atan2(
        canvas.height / 2 - random.y,
        canvas.width / 2 - random.x
    );

    const velocity = {
        y: Math.sin(myAngle) * difficulty,
        x: Math.cos(myAngle) * difficulty,
    }


    enimies.push(new Enimies(random.x, random.y, enemySize, enemyColor, velocity));
}


// Animations in Canvas

function animation() {

    requestAnimationFrame(animation);

    context.clearRect(0, 0, canvas.width, canvas.height);

    nomi.draw();

    weapons.forEach((weapon) => {
        weapon.draw();
        weapon.update();
    });


    enimies.forEach((item) => {
        item.update();
    });
}


// Event Listener in Canvas

canvas.addEventListener("click", (e) => {

    const myAngle = Math.atan2(e.clientY - canvas.height / 2, e.clientX - canvas.width / 2);

    const velocity = {
        y: Math.sin(myAngle) * 5,
        x: Math.cos(myAngle) * 5,
    }
    
    weapons.push(new Weapon(canvas.width / 2, canvas.height / 2, 6, "white", velocity));
});

animation();