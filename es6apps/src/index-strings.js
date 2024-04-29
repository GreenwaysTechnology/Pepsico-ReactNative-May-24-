//
let firstName = "Subramanian";
let lastName = 'Murugan'
//old pattern
let fullName = firstName + "  " +  lastName
//es 6 interpolation with back tick notation
fullName = `${firstName} ${lastName}`

console.log("Name" + fullName)
console.log("Name", fullName)
console.log(`Name  ${fullName}  `)

//multi line strings
let doc = `
   <html>
      <head>
          <title></title>
      </head>
    <body>
      <h1>Name ${fullName} </h1>
    </body>
 </html>
`
console.log(doc)