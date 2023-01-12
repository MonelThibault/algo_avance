function DFS_iterative(G, e) { // Code generated, need to assess if i should work with it ?
    // Initialize stack and mark entrance as visited
    let S = [e];
    let visited = new Set();
    visited.add(e);

    while (S.length > 0) {
        // Pop vertex from stack
        let v = S.pop();

        if (v === exit) {
            // Return path from entrance to exit
            let path = [v];
            while (v !== e) {
                v = parent[v];
                path.push(v);
            }
            return path.reverse();
        }

        // Mark vertex as visited
        visited.add(v);

        // Add unvisited neighbors to stack
        for (let w of G.neighbors(v)) {
            if (!visited.has(w)) {
                parent[w] = v;
                S.push(w);
            }
        }
    }
    return undefined;
}