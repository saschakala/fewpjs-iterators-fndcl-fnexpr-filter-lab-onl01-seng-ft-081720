// Code your solution here

function findMatching(drivers, name){ 
    return drivers.filter(driver =>
        driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => 
        driver.split("")
        .splice(0, string.length)
        .join("") === string)
}

function matchName(drivers, name){
    return drivers.filter(driver =>
        driver["name"] === name)
}