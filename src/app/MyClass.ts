class MyClass {
  name: String;
  id: number;


 constructor(name){
   this.name = name;
   this.id = 1;
 }

 getName(){
   return this.name;
 }

}

class ChildClass extends MyClass {

   display() : void {
     console.log("I am a child");
   }
}


var achild = new ChildClass("Bradley");
