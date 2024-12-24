const user = {
    username: "batman",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "superman"
// user.welcomeMessage()

console.log(this);
