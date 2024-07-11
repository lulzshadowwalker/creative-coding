// NOTE: Newton's First Law: An object at rest stays at rest, and an object in motion stays in motion,
// at a constant speed and direction unless acted upon by an unbalanced force.
// i.e. An object’s velocity vector will remain constant if it’s in a state of equilibrium.
//
// NOTE: Newton's Third Law: Force always comes in pairs, and they are equal and opposite.
// This still causes confusion because it sounds like these forces would always cancel each other out.
// This isn’t the case. Remember, the forces act on different objects.
// And just because the two forces are equal doesn’t mean that the objects’ movements are equal (or that the objects will stop moving).
// (Imagine yourself pushing a truck wearing roller skates. You push the truck, and the truck pushes you back.)
// p5.js context: If you calculate a p5.Vector called f that represents a force of object A on object B,
// you must also apply the opposite force that object B exerts on object A. You can calculate this other force as p5.Vector.mult(f, -1).
//
// NOTE: Newton's Second Law: Force equals mass times acceleration.
//
// NOTE: Time Step: The rate at which the simulation is updated. 

class Mover {
    constructor() {
        this.mass = 1
        this.position = createVector(width / 2, height / 2);
        this.acceleration = createVector();
        this.velocity = createVector();
    }

    applyForce(force) {
        // force = mass X accel 
        // accel = mass / force 

        // using p5.Vector instead of vector.div not to mutate the original vector
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(127, 127);
        ellipse(this.position.x, this.position.y, 48, 48);
    }

    checkEdges() {
        if (this.position.x > width) {
            this.position.x = width;
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.velocity.x *= -1;
            this.position.x = 0;
        }

        if (this.position.y > height) {
            this.velocity.y *= -1;
            this.position.y = height;
        }
    }
}

var mover;
function setup() {
    createCanvas(385, 300);
    mover = new Mover();
    createP('Hold mouse down to apply wind force.');
}

function draw() {
    background(240);
    const gravity = createVector(0, 0.1);
    mover.applyForce(gravity);

    if (mouseIsPressed) {
        const wind = createVector(0.1, 0.05);
        mover.applyForce(wind);
    }

    mover.update();
    mover.display();
    mover.checkEdges();
}
