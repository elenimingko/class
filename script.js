class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    get birthYear(){
        const birthYear= new Date().getFullYear() - this.age ;
        return birthYear;
    }
    
}
class Teacher extends User{
    constructor(firstName,lastName,age,groups,yearOfExperience){
        super(firstName,lastName,age);
        this.groups=groups;
        this.yearOfExperience=yearOfExperience;
    }
    isGroupTeacher(groupName){
        return this.groups.includes(groupName);
    }
}
class Student extends User{
    static MIN_GRADE_FOR_SCHOLARSHIP=4;
    constructor(firstName,lastName,age,group,averageGrade){
        super(firstName,lastName,age);
        this.group=group;
        this.averageGrade=averageGrade;
    }
    isEligibleForScholarship(){
        if (this.isEligibleForScholarship >=Student.MIN_GRADE_FOR_SCHOLARSHIP) {
            return true;
        } else{
            return false;
        }
    }
}

const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student2 = new Student('Leonardo', 'DiCaprio', 48, '62c', 3.9);


console.log(student1.fullName);
console.log(student2.birthYear); 
console.log(student1.isEligibleForScholarship()); 
console.log(student2.isEligibleForScholarship()); 
console.log(teacher1.isGroupTeacher(student1.group)); 
console.log(teacher1.isGroupTeacher(student2.group)); 
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP);

// console.log(Student.min_grade_of_scholarintership);



// const user=new User('eleni','mingko','30')
// console.log(user.fullName);
// console.log(user.birthYear);