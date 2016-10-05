'use strict'
var queue = new (class Queue{
	constructor() {
		this.oldIndex = 0;
		this.newIndex = 0;
		this.storage =  {}; 
	}
    
    get size(){
		return this.newIndex - this.oldIndex;
	}	

	enqueue(data){
		this.storage[this.newIndex] = data;
		this.count++;	
	}

	dqueue(){
		if (this.size) {						
			let data = this.storage[this.oldIndex];
			delete this.storage[this.oldIndex];
			this.oldIndex++;
			return data;		
		}
		return "Queue is empty."
	}	
})();