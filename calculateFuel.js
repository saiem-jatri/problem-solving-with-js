// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

function calculateFuel(distance) {
    const minFuel = 100;
    const fuelNeeded = distance * 10;
    const totalFuel = Math.max(fuelNeeded, minFuel);
    return totalFuel;
}

console.log(calculateFuel(23.5))