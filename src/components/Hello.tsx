const Hello = () => {
    const OnClick = () => {
        alert("hello")
    }
    const text = "Hello, React!"
    return (
        <div onClick={OnClick}>
            {text}
        </div> 
    )
}

export default Hello