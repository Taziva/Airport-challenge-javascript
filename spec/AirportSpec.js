describe("Airport", function() {
  var airport
  var plane = jasmine.createSpy('plane');

  beforeEach(function(){
    airport = new Airport()
  })

  describe("#land", function(){
    it("instructs a plane to land", function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    })
    it("does not allow landing when at capacity", function() {
      for(var i = 0; i <= 19; i++){
        airport.land(plane);
      }
      expect(function(){airport.land(plane)}).toThrowError("Cannot land plane, airport full")    })
  })
  describe("#takeOff", function(){
    it("instructs a plane to take off", function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    })
  })
})
