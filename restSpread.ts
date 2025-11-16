//? spread oparetor (ছড়িয়ে দেওয়া)


const friends:string[]=['rahim','karim']

const schoolFriends=['rinku','zinku']

const collageFriends=['hadi','sadi']


friends.push(...schoolFriends)
friends.push(...collageFriends)

// console.log(friends)


const user={
    name:'imran',
    phoneNo:'01918513419',
    

}

const otherInfo={
    hobby:'gaming',
    color:'black'
}


const userInfo={...user,...otherInfo}

// console.log(userInfo)


// ? rest oparetor (একত্রিত করা)


const sendInvite=((...friends:string[])=>{
     friends.forEach((friend:String)=>{
        console.log(`send invitation ${friend}`)
     })
})


sendInvite('rakib')