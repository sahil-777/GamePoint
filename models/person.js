class Person {
    constructor(id,username,password,role){
        this.id=id;
        this.username=username;
        this.password=password;
        this.role=role; // 1 for Admin, 0 for User/Client
    }
}

module.exports = Person;