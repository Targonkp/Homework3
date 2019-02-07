import {distance} from "../src/js/lib.js";

test ('Should change', ()=> {
const result = distance(10,20);
expect(result).toBe(200);

})