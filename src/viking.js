// Soldier
class Soldier {
    constructor (health, strength) {
        this.strength = strength;
        this.health = health;
    }
    //attack returns the soldier's strength
    attack () {
        return this.strength;
    }
    //receiveDamage removes health equal to the damage received
    receiveDamage (damage) {
        this.health -= damage;
    }


}

// Viking
class Viking extends Soldier {
    //the order is important - we code the constructor with the 'name' as the first argument
    constructor (name, health, strength) {
        //inherit constructor from parent class with super
        super(health, strength);
        //add the new name property
        this.name = name;
    }
    //re-implement method to account for the new strings that need to be returned
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`; 
        }
    }
    //Kratos is the real God of War, not Odin
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    //re-implement receiveDamage method to account the strings that need to be returned
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`; 
        }
    }
}

// War
class War {
    //constructor initializes every new 'war' variable with empty arrays, accepts no arguments
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    //simple add function to each army's array
    addViking (viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }
    //Iteration 5
    // Instead of having a method for viking attack and saxon attack, we could just have a method for "attack" and then have it ask for 2 arguments: attacker and defender, accepting either "Saxon" or "Viking" as values.
    //I'm not doing it because testing it is tedious but that's the idea.
    vikingAttack () {
        //pick random Saxon by position in saxon army array
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        //pick random Viking by position in viking army array
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        //obtain damage from the random viking
        const damage = this.vikingArmy[randomViking].attack();
        //apply damage to saxon
        const attackResult = this.saxonArmy[randomSaxon].receiveDamage(damage);
        //remove Saxon if he died
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon);
        }
        //return the result of the attack
        return attackResult;
    }
    saxonAttack () {
        //pick random Saxon
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        //pick random Viking
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        //obtain damage from the random saxon
        const damage = this.saxonArmy[randomSaxon].attack();
        //apply damage to viking
        const attackResult = this.vikingArmy[randomViking].receiveDamage(damage);
        //remove Viking if he died
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking);
        }
        //return the result of the attack
        return attackResult;
    }
    //simple method implemented to show war status
    showStatus () {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
