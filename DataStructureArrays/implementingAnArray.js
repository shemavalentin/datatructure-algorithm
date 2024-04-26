// let's create an array using Classes

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // Getting access/grab the data from memory.

  get(index) {
    return this.data[index];
  }

  // Let's push an Item into the array

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // Let's delete the last Item

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    // Function that shift data to their new indexes after deletion
    this.shiftItems(index);

    return item;
  }
  // Method shiftItems to loop through items int the array
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

// Now copy this array

const newArray = new MyArray();
newArray.push("hi");
newArray.push("Lola");
newArray.push("Valentin");
//newArray.pop();

newArray.delete(1);

newArray.push("!");

//console.log(newArray.get(0));
console.log(newArray);
