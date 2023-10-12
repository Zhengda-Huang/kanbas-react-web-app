const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
function FunctionParenthesisAndParameters() {
    return(
    <div>
        <h3>Parenthesis And Parameters</h3>
        twoSquared={twoSquared}<br/>
        square(2)={twoSquared}<br/>
        threePlusOne={threePlusOne}<br/>
        plusOne(3)={threePlusOne}
    </div>
    )
}

export default FunctionParenthesisAndParameters