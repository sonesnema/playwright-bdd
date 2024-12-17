import { Before,After } from "./fixture";
Before(async({$testInfo})=>{
console.log("Execution Starting on",$testInfo.title)
})