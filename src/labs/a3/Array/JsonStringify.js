const JsonStringify = () => {
    let squares = [1, 4, 16, 25, 36];

    squares = JSON.stringify(squares)

    return (
        <div>
            <h3>JSON Stringify</h3>
            squares ={squares}<br/>
        </div>
    )
}

export default JsonStringify

