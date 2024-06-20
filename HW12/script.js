'use strict'

class Vesteros {
    constructor(name, location) {
        this.name = name; 
        this.location = location; 
    }
    description = () => console.log(`${this.name} rule in the region: ${this.location}.`)
}

class Houses extends Vesteros {
    constructor(name, location, oathToTheKing) {
        super(name, location);
        this.oathToTheKing = oathToTheKing;
    }
    loyalty = () => console.log(`${this.name} swore allegiance to the king ${this.oathToTheKing}`)    
}

class Starks extends Houses {
    #symbol;

    constructor(name, location, oathToTheKing, castle, symbol, motto) {
        super(name, location, oathToTheKing)
        this.castle = castle
        this.#symbol = symbol 
        this.motto = motto
    }
    emblem = () => console.log(`On the coat of arms of the ${this.name} is depicted ${this.#symbol}`)
    residence = () => console.log (`The castle of ${this.name} is ${this.castle}`)
    watchword = () => console.log (`The motto of ${this.name} is saying: ${this.motto}`)
}  

class Lannister extends Houses {
    #symbol;

    constructor(name, location, oathToTheKing, castle, symbol, power) {
        super(name, location, oathToTheKing)
        this.castle = castle
        this.#symbol = symbol
        this.power = power
    }
    emblem = () => console.log(`On the coat of arms of the ${this.name} is depicted ${this.#symbol}`)
    residence = () => console.log (`The castle of ${this.name} is ${this.castle}`)
    force = () => console.log (`The main power of ${this.name} is ${this.power}`)
}

class Martell extends Houses {
    #symbol;

    constructor(name, location, oathToTheKing, castle, symbol, landscape) {
        super(name, location, oathToTheKing)
        this.castle = castle
        this.#symbol = symbol 
        this.landscape = landscape
    }
    emblem = () => console.log(`On the coat of arms of the ${this.name} is depicted ${this.#symbol}`)
    residence = () => console.log (`The castle of ${this.name} is ${this.castle}`)
    habitat = () => console.log (`${this.location} is located in ${this.landscape}`)
}


class WhiteWalkers extends Vesteros {
    #king

    constructor(name, location, superPower, king, fear) {
        super(name, location);
        this.superPower = superPower;
        this.#king = king
        this.fear = fear 
    }
    domination = () => console.log(`${this.#king} rules the white walkers and the lands beyond the wall`)
    vulnerability = () => console.log(`${this.name} are afraid of ${this.fear}`)
    imbalance = () => console.log (`The superpower of white walkers is ${this.superPower}`)
}

const houseStark = new Starks('Starks', 'The North', 'Barateon', 'Winterfell', 'direwolf', 'Winter is coming')
console.log(houseStark)
houseStark.description();
houseStark.loyalty();
houseStark.emblem();
houseStark.residence();
houseStark.watchword();

const houseLannister = new Lannister('Lannisters', 'Westerlands', 'Barateon', 'Casterly Rock', 'Lion', 'gold....lots of gold')
console.log(houseLannister);
houseLannister.description();
houseLannister.loyalty();
houseLannister.emblem();
houseLannister.residence();
houseLannister.force();

const houseMartell = new Martell('Martells', 'Dorne', 'Barateon', 'Sunspear', 'Orange, a red sun pierced by a gold spear palewise', 'desert')
console.log(houseMartell);
houseMartell.description();
houseMartell.loyalty();
houseMartell.emblem();
houseMartell.residence();
houseMartell.habitat();

const others = new WhiteWalkers('White Walkers', 'Land of Always Winter', 'immortality', 'Night King', 'fire')
console.log(others)
others.description();
others.domination();
others.vulnerability();
others.imbalance();