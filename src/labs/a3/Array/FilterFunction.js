let numberArray1 = [1, 2, 4, 5, 6];

const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

const FilterFunction = () =>{
    return(
        <div>
            <h3>Filter function</h3>
            numberGreaterThan2 = {numbersGreaterThan2}
            evenNumber = {evenNumbers}
            oddNumbers = {oddNumbers}
        </div>
    )
}

export default FilterFunction