

// implemented using a heap
class PriorityQueue {

	constructor(comp) {
		this.comp = comp;
		this.arr = [];
	}

	leftChild(i) {
		return i * 2 + 1;
	}

	rightChild(i) {
		return i*2 + 2;
	}

	parent(i) {
		return Math.floor((i - 1) / 2);
	}

	swap (arr, a, b) {
		let x = arr[a];
		arr[a] = arr[b];
		arr[b] = x;
	}

	enq(priority, data) {
		this.arr.push({priority, data});

		let i = this.arr.length - 1;
		while (i !== 0 && this.comp(this.arr[i].priority, this.arr[this.parent(i)].priority)) {
			this.swap(this.arr, i, this.parent(i));
			i = this.parent(i);
		}

		return this.arr.length;
	}

	deq() {
		let i = 0;
		this.swap(this.arr, i, this.arr.length - 1);
		let result = this.arr.pop().data;

		while (this.arr.length) {
			let leftIndex = this.leftChild(i);
			let rightIndex = this.rightChild(i);

			let left = undefined;
			let right = undefined;
			if (leftIndex < this.arr.length) left = this.arr[leftIndex];
			if (rightIndex < this.arr.length) right = this.arr[rightIndex];

			let priority = this.arr[i].priority;

			if (right && (!this.comp(priority, right.priority) || !this.comp(priority, left.priority))) { // both
				if (this.comp(right.priority, left.priority)) {
					this.swap(this.arr, i, rightIndex);
					i = rightIndex;
				} else {
					this.swap(this.arr, i, leftIndex);
					i = leftIndex;
				}

			} else if (left && !this.comp(priority, left.priority)) { // one
				this.swap(this.arr, i, leftIndex);
				i = leftIndex;
			} else { // none
				break;
			}
		}

		return result;
	}

	peek() {
		return this.arr[0].data;
	}
}

function random(max) {
  return Math.floor(Math.random() * max);
}

let pq = new PriorityQueue((a,b) => a >= b);

for (let i = 0; i <= 20; i++) {
	let p = random(20);
	pq.enq(p,p);
	console.log(p, pq);
}

for (let i = 0; i <= 20; i++) {
	console.log(pq.deq());
	console.log(pq);
}
