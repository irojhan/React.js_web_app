function Message() {
    const name = 'Test'
    if (name)
        return <h1>Web {name}</h1>;
    return <h1> Hello World </h1>;
}
export default Message;