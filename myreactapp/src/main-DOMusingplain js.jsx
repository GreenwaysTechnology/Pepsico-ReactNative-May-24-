function createElement() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = 'Hello!'
    const rootElement = document.getElementById('root')
    //attach heading with Root Elemnt
    rootElement.appendChild(Heading)
}
createElement()