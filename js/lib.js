export function distance(consumption, fuel) {
    const sum = 100/consumption*fuel;
    return Math.ceil(sum);
}