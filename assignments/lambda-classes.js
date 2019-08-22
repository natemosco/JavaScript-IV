// CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person{
    constructor(personAttributes){
        this.newName = personAttributes.name;
        this.newAge = personAttributes.Age;
        this.newLocation = personAttributes.Location;
    }
    speak(){return `Hello my name is ${this.newName}, I am from ${this.newLocation}`}
}


// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
// * `specialty` what the Instructor is good at i.e. 'redux'
// * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
// * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
// * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
 
class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){return 'Today we are learning about ${subject}'}
    grade(student,subject){return `${student.name} receives a perfect score on ${subject}`}   
};




// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

const studentOne = new Person ({
    name : "Jack Johnson",
    age : 34,
    location : "Chicago",
    previousBackground: "Guitarist",
    className: "MT101",
    favSubjects: ["Music Theory","Psychology","Biology"],
    listsSubjects(){return favSubjects[0] + favSubjects[1] + favSubjects[2]},
    PRAssignment(subject){return `${studentOne.name} has submitted a PR for ${subject}`},
    sprintChallenge(subject){return `${studentOne.name} has begun sprint challenge ${subject}`}
});
const studentTwo = new Person ({
    name : "Jimmy Hendrix",
    age : "Living Dead",
    location : "Seattle",
    previousBackground: "Guitarist",
    className: "HS101",
    favSubjects: ["Music Theory","Botany","Chemistry"],
    listsSubjects(){return favSubjects[0] + favSubjects[1] + favSubjects[2]},
    PRAssignment(subject){return `${studentTwo.name} has submitted a PR for ${subject}`},
    sprintChallenge(subject){return `${studentTwo.name} has begun sprint challenge ${subject}`}
});const studentThree = new Person ({
    name : "Harry Potter",
    age : 20,
    location : "London",
    previousBackground: "Orphan",
    className: "Gryffindor",
    favSubjects: ["Defense Against The Dark Arts","Potions","Study of Magical Creatures"],
    listsSubjects(){return favSubjects[0] + favSubjects[1] + favSubjects[2]},
    PRAssignment(subject){return `${studentThree.name} has submitted a PR for ${subject}`},
    sprintChallenge(subject){return `${studentThree.name} has begun sprint challenge ${subject}`}
});


// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`