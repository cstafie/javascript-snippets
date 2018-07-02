// DIJKSTRA'S ALGORITHM

function findMin(toVisit, distance) {
	let minV = toVisit[0];
	for (let v of toVisit) {
		if (distance[v].dist < distance[minV].dist) {
			minV = v;
		}
	}
	return minV;
}

// graph is a key value store where graph[k] = [{v: n1, dist: d1}, {v: n2, dist: d2}...]
// where n1, to ny is are k's neighbors

function shortestPathFromSource(graph, numKeys, source) {
	let distance = {}, toVisit = [];

	for (let vertex of Object.keys(graph)) {
		toVisit.push(vertex);
		distance[vertex] = { dist: Number.MAX_SAFE_INTEGER };
	}
	distance[source] = {dist: 0, through: source}

	while (toVisit.length) {
		let u = findMin(toVisit, distance); // can use my pq here
		toVisit.splice(toVisit.indexOf(u), 1);	

		for (let neighbor of graph[u]) {
			if (distance[neighbor.v].dist > neighbor.dist + distance[u].dist) {
				distance[neighbor.v] = {dist: neighbor.dist + distance[u].dist, through: u};
			}
		}
	}

	return distance;
}

console.log(shortestPathFromSource({
		'A': [{v: 'B', dist: 20}, {v: 'D', dist: 80}, {v: 'G', dist: 90}],
		'B': [{v: 'F', dist: 10}],
		'C': [{v: 'F', dist: 50}, {v: 'D', dist: 10}, {v: 'H', dist: 20}],
		'D': [{v: 'C', dist: 10}, {v: 'G', dist: 20}],
		'E': [{v: 'B', dist: 50}, {v: 'G', dist: 30}],
		'F': [{v: 'C', dist: 10}, {v: 'D', dist: 40}],
		'G': [{v: 'A', dist: 20}],
		'H': [],
	}, 
	8, 
	'E'
));


