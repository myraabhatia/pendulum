const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constaraint = Matter.Constaraint;

var engine, world;
var holder,bob;

function setup(){
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    holder = new Holder(200,50,200,20)
bob = new Bob(50,50)
var options = {
bodyA:holder.body,
bodyB:bob.body,
stiffness:0.04,
length:10
}
var chain = Constaraint.create(options)
world.add(world,chain)

}
function draw(){
    background(0);
    Engine.update(engine);
    holder.display();
   bob.display();
   chain.display();
   strokeWeight(3);
  line(bob.position.x,bob.position.y,holder.position.x,holder.position.y)

}