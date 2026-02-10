import { faker } from '@faker-js/faker';


export class UserBuilder {
    addEmail(){
        this.UserEmail = faker.internet.email()
        return this 
    }
    addName(){
        this.UserName = faker.person.firstName()
        return this 
    } 
    addPassword(){
        this.UserPassword = faker.internet.password()
        return this     
    } 
    addBio(){
        this.UserBio = faker.music.genre()
        return this 
    }
    generate(){
        const copied = structuredClone (
        {
            UserEmail: this.UserEmail,
            UserName: this.UserName,
            UserPassword: this.UserPassword,
            UserBio: this.UserBio,
        }
    )
        return copied
    }
}
