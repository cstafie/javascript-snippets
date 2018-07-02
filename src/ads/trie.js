
function Trie() {
	this.EmptyNode = function() {
		return {
			isWord: false,
		}
	}

	this.root = new this.EmptyNode();
}

// TODO: split the string into an array, 
// so we don't have to use subStr for O(n^2 time)

// TODO: also no need for recursion, taking up extra space for no benefit

Trie.prototype.insert = function(string) {
  const insertHelper = (s, node) => {
    if (s.length === 0) {
    	node.isWord = true;
    	return;
    }

    let c = s.charCodeAt(0);

    if (!node.hasOwnProperty(c)) {
    	node[c] = new this.EmptyNode();
    }

    insertHelper(s.substr(1), node[c]);    
  }

  insertHelper(string, this.root);
};

Trie.prototype.print = function() {
	const toStringHelper = (soFar, node) => {
		if (node.isWord) {
			console.log(soFar.length ? soFar : '[ the empty string ]');
		}

		for (let k of Object.keys(node)) {
			if (k !== 'isWord') {
				toStringHelper(soFar + String.fromCharCode(k), node[k]);
			}
		}
	}

	toStringHelper('', this.root);
}

Trie.prototype.contains = function(string) {
	let containsHelper = (s, node) => {
		if (s.length === 0) {
			return node.isWord;
		}

		let c = s.charCodeAt(0);

		if (!node.hasOwnProperty(c)) {
			return false;
		}

		return containsHelper(s.substr(1), node[c]);'..:'
	}

	return containsHelper(string, this.root);
}

Trie.prototype.lazyRemove = function(string) { 

}

Trie.prototype.remove = function(string) {

}

let trie =  new Trie();

let strings = ['hell', 'he', 'hello', 'heel', 'help', 'heat', '', 
	'....', '.:.', '::', '`:.', ':..', '..:'
];

let notStrings = ['hel', 'h', 'heell', 'helps', 'hea', '...'];

strings.forEach(s => trie.insert(s));
console.log("CONTAINS");
strings.forEach(s => console.log(trie.contains(s)));
console.log("DOES NOT CONTAIN");
notStrings.forEach(s => console.log(trie.contains(s)));

console.log("PRINT");
trie.print();