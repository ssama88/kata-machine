export default function bs_list(haystack: number[], needle: number): boolean {
    let highPoint = haystack.length,
        lowPoint = 0

    while (lowPoint< highPoint) {
        const searchPoint = Math.floor(lowPoint + (highPoint - lowPoint)/2 )
        const searchVal = haystack[searchPoint];

        if (haystack[searchPoint] === needle) return true;
        const tempPoint = searchPoint
        if (needle > searchVal) {
            //if the number we're looking for is greater than the number we searched,
            // search through the half that is greater than the search point
            lowPoint = tempPoint + 1
            // console.log("getting here", searchPoint, lowPoint)

        } else {
            //if the number is less than the number we searched,
            //look through the smaller half
            highPoint = tempPoint
            
        }
    }

    return false;
}
