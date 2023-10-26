const dir = [
    [-1, 0],
    [1,0],
    [0,-1],
    [0,1],
]
const walk = (maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean=>{
    if(curr.x < 0 || curr.y < 0 || curr.x >= maze[0].length || curr.y >= maze.length) return false //if off graph
    if(maze[curr.y][curr.x] === wall) return false //hit wall
    if(seen[curr.y][curr.x]) return false //already visited point
    if(curr.x === end.x && curr.y === end.y ){
        path.push(end)
        return true

    } 

    //3 recurse
    seen[curr.y][curr.x] = true
    path.push(curr) //pre
    for(let i = 0; i< dir.length; i++){ //recurse
        const [x,y] = dir[i]
       const reachedEnd = walk(maze, wall, {x: curr.x + x, y: curr.y + y}, end, seen, path)
       if (reachedEnd) return true
    }
    path.pop() //post
    return false
     
}
/*
Trying to understand why this works

//so if none of the base cases are true then we have successfully walked to a valid point,

*/

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
   const seen: boolean[][] = []
   const path: Point[] = []
   for(let i = 0; i< maze.length; i++){
    seen.push(new Array(maze[0].length).fill(false))
   }
   walk(maze, wall, start, end, seen, path)
   return path
}