class Teacher {
    constructor(name, school, course, yearOfExperience = 0) {
      this._name = name;
      this._school = school;
      this._course = course;
      this._yearOfExperience = yearOfExperience; 
    }
  
    get name() { 
      return this._name;
    }
  
    get school() { 
      return this._school;
    }
  
    get course() {
      return this._course;
    }

    set course(newCourse) {
      if (typeof newCourse === 'string') {
        this._course = newCourse; 
      } else {
        throw new Error('Invalid Course');
      }
    }

    set yearOfExperience(value) {
      if (typeof value === 'number') {
        this._yearOfExperience = value;
      } else {
        throw new Error('Input invalid -- must be a number');
      }
    }

    introduce() {
        console.log(`Hello, my name is ${this._name}, and I teach ${this._course} at ${this._school}.`);
    }
}
  

class Student extends Teacher {
    constructor(name, school, course, grade, studentID) {
      super(name, school, course); 
      this._grade = grade;
      this._studentID = studentID;
    }
  
    get grade() {
      return this._grade;
    }
  
    get studentID() {
      return this._studentID; 
    }

    introduce() {
        super.introduce(); 
        console.log(`I'm also a student with the ID ${this._studentID} and I'm a ${this._grade}.`)
    }
  
    static gpaPSA() {
      console.log('Students must maintain a 3.0 GPA')
    }
}
  

const teacher1 = new Teacher('George Feeny', 'John Adams High School', 'English');
const teacher2 = new Teacher('Annalise Keating', 'Middleton University', 'Criminal Defense');
  
const student1 = new Student('Reggie Bush', 'University of Southern California', 'Sports', 'Freshman', '0005');
const student2 = new Student('Kobe Bryant', 'Lower Merion High School', 'Basketball', 'Senior', '0033');
  
console.log(`Teachers:
name: ${teacher1.name} | school: ${teacher1.school} | course: ${teacher1.course}
name: ${teacher2.name} | school: ${teacher2.school} | course: ${teacher2.course}`)
teacher1.introduce()
teacher2.introduce()
  
console.log(`Students:
name: ${student1.name} | school: ${student1.school} | grade: ${student1.grade} | student id no: ${student1.studentID}
name: ${student2.name} | school: ${student2.school} | grade: ${student2.grade} | student id no: ${student2.studentID}\n`)

console.log('\n')
student1.introduce()
console.log('\n')
student2.introduce()

console.log('\n')
Student.gpaPSA()
