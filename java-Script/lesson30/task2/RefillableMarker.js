class RefillableMarker extends Marker {
    constructor(colorMarker, amountInk){
        super(colorMarker, amountInk);
    }
    refillMarker(howMuchInkAdd) {
        super.print(string);
      if(this.amountInk < 1){
        console.log(this.amountInk = howMuchInkAdd );
      }
    }
}
