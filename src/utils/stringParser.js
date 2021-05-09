function stringParser(path) {
    const pathToString = []
    path.forEach(pos => {
        pathToString.push(`${pos[0]}${pos[1]}`)
    });
    return pathToString;
}
export default stringParser;