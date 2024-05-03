
//impure function
// function updateProfile(city, profile) {
//     profile.city = city
//     return profile
// }

// function updateProfile(city, profile) {

//     return {
//         name: profile.name,
//         city: city
//     }
// }
// function updateProfile(city, profile) {

//     return Object.assign({}, profile, { city: city })
// }
function updateProfile(city, profile) {

    return { ...profile, city: city }
}

let profile = {
    name: 'Subramanian',
    city: 'Coimbatore'
}
console.log('before update', profile)
const result = updateProfile('Chennai', profile)
console.log(profile === result ? "Same Object" : "Different Object")
console.log('after update', result)
