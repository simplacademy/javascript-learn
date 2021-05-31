export class Passenger {
    constructor(firstName, lastName, gender, dateOfBirth, age, vegetarian) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.vegetarian = vegetarian;
        
    }
    getFullName() {
        var title = this.gender.code == 'F' ? 'Mrs. ' : 'Mr. ';
        return title + this.firstName + " " + this.lastName;
    }
}