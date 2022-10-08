// Create a Stack


//code

var Stack = function (){

      this.count = 0;
      this.storage = {};

      // Add a value onto the end of the stack   e.g. if we declare name of the stack as myStack -> var myStack = Stack();
      // then if we want to push any value 8 in it then we say myStack.push(8);
      this.push = function (value) {
        this.storage[this.count] = value; // we r putting  the value in that storage[index] here index is 0
        this.count++;                     // then we r increasing count as well as index value
      }


      // Remove and returns the value at the end of the stack  it removes last value from the stack then show remaining stack
       this.pop = function (){
          if(this.count === 0){
            return undefined;
          }          
          this.count--;                            //first decrease the count by 1 and that will be index for last object
          var result = this.storage[this.count];   //then we find that last value
          delete this.storage[this.count];         // delete that
          return result;                           // then show remained stack
       }

       
       // find the length of stack
       this.size = function(){
        return this.count;
       }

        // find the value at the end of the stack
        this.peek = function(){
           return this.storage[this.count - 1];
        }
}

//practical

var myStack = new Stack();

myStack.push(7);
myStack.push(12);
myStack.push("mordhwaj");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
