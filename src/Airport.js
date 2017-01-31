const DEFAULT_CAPACITY = 20

function Airport(){
  this.planes = [];
  this.capacity = DEFAULT_CAPACITY
}

Airport.prototype.land = function(plane) {
  if (this.planes.length >= DEFAULT_CAPACITY) {
    throw new Error("Cannot land plane, airport full")
  }
  else{this.planes.push(plane)}
};

 Airport.prototype.takeOff = function(plane) {
   this.planes.pop(plane)
 };
