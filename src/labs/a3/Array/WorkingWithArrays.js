import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoop from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindIndex from "./FindIndex";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
];


function WorkingWithArray(){
    return(
        <div>
            <h3>Working withArrays</h3>
            numberArray1 = {numberArray1} <br/>
            stringArray1 = {stringArray1} <br/>
            variableArray1 = {variableArray1}
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoop/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
    )
}

export default WorkingWithArray