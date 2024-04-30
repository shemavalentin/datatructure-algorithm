class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // In hash tables even though  there is a loop it is O(1) Cse hashTables are very fast

  // creating  the set Method

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // This one is O(1)

  // Let's say I need to grab grapes and the value

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1)
    return undefined;
  }

  // Creating Keys in my hashTable to enable us to loop though the keys
  keys() {
    const keyArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        //console.log(this.data[i][0]);
        keyArray.push(this.data[i][0][1]);
      }
    }
    return keyArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 60);
myHashTable.set("oranges", 2);
myHashTable.keys();
