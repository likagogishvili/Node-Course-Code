// setTimeout(()=>{
//     console.log("Two seconds are up")
// })

// const names =['Andrew','Jen','Jess']
// const sortNames = names.filter((name)=>{
//     return name.length <= 4
// })

// const geocode = (adress, callback) =>{
//     setTimeout(() => {
//         const data = {
//             latitude:0,
//             lonitude : 0
//         }
//         callback(data)
//     }, 2000);

// }

// const data = geocode('Philadelphia', (data)=>{
//     console.log(data)
// })


const add = (a,b,sum)=>{
    setTimeout(() => {
        sum(a+b)        
    }, 2000);
}

add(1,4,(sum)=>{
    console.log(sum)
})