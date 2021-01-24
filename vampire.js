class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire); //pushing vampire as offspring
    vampire.creator = this; // makes the vampire entered the offspring of the vampire entered
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length; //counts the num of offsprings in that array
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVamp = 0;
    let currentVamp = this;

    //depth- going up the tree 
    while (currentVamp.creator) { //current vampires parent 
      currentVamp = currentVamp.creator; //re-assigning value of currentvampire-to its parent- returns num and loops until find the root and stops 
      numberOfVamp++;
    }
    return numberOfVamp;
    
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal 
      
    

  }

}

module.exports = Vampire;
