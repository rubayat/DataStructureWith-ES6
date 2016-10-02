'use strict'
var stack = new (class Stack{
	constructor() {
		this.count = 0;
		this.storage =  {}; 
	}
    
    get size(){
		return this.count;
	}	

	push(data){
		this.storage[this.count] = data;
		this.count++;	
	}

	pop(){
		if (this.count) {
			this.count--;			
			let data = this.storage[this.count];
			delete this.storage[this.count];
			return data;		
		}

		return "Stack is empty, nothing to pop."
	}	
})();