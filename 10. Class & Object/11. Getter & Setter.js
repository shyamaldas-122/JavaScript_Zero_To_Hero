class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}shyamal`
    }

    set password(value){
        this._password = value
    }
}

const shyamal = new User("s@shyamal.gmail.com", "abc")
console.log(shyamal.email);