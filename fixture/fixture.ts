
import {test as base,createBdd} from'playwright-bdd'
type MyFixture={
initScript:void
}
export const test = base.extend<MyFixture>({
initScript:[async({$testInfo},use)=>{
const dateTime=new Date()
await use()
},{scope:'test',auto:true}]
})

export const{Given,When,Then,Before,BeforeAll,After,AfterAll}=createBdd(test)