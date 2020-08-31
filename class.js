function makeclass() {
    class Vegitable{
        constructor(name)
        {
            this.name = name;
        }
    }
    return Vegitable;
}
const Vegitable = makeclass();
const carrot = new Vegitable("carrot");
console.log(carrot.name);