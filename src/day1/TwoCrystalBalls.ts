export default function two_crystal_balls(breaks: boolean[]): number {
    const interval = Math.floor(Math.sqrt(breaks.length))
    let goodPoint = interval,
    foundTrue = false
    while(goodPoint < breaks.length){
        if(foundTrue){
            if(breaks[goodPoint]) return goodPoint
            goodPoint ++
        }else{
            if(breaks[goodPoint]){ //go back to the last known false point where we can then increment by 1 till we find the first true point
                foundTrue = true 
                goodPoint -= interval
            }else{
            goodPoint += interval
    
            }
        }
      
    }
    return -1
}