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
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`; 
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
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
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking (viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack () {
        //pick random Saxon
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        //pick random Viking
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        //obtain damage from the random viking
        damage = this.vikingArmy[randomViking].strength;
        //apply damage to saxon
        return this.saxonArmy[randomSaxon].receiveDamage(damage);
    }
    saxonAttack () {
        //pick random Saxon
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        //pick random Viking
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        //obtain damage from the random saxon
        damage = this.saxonArmy[randomSaxon].strength;
        //apply damage to viking
        return this.vikingArmy[randomViking].receiveDamage(damage);
    }
    showStatus () {}
}
