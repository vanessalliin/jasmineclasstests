class ExampleClass{
    constructor(sConstructor){
        this.sString = sConstructor;
    }
    handleInput(sInput){
        return `${sInput} ${this.sString}`;
    }
}

class OverUnder{
    constructor(nComputer){
        if(typeof(nComputer) == "undefined"){
            this.nComputer =  Math.ceil(Math.random() * 100);   
        }else{
            this.nComputer = nComputer;
        }
    }
    handleInput(nGuess){
        if(nGuess < this.nComputer){
            return "higher";
        }else if(nGuess > this.nComputer){
            return "lower";
        }else{
            return "just right";
        }
    }
}

export {ExampleClass, OverUnder}