var students = {
    name: "John",
    age: 18,
    city: "New York",
    subjects: ["Math", "English", "History", "Biology"],
    introduceMyself: function() {
        return "Hi my name is " + this.name + " and I'm from " + this.city;
    },
    friends: [
        {
            school: "Elementry",
            state: "South Dakota",
            startingYear: 2006,
            finishingYear: 2011,
            bestfriends: [
                {
                    name: "David",
                    age: 17,
                    subject: "gym"
                },
                {
                    name: "stacey",
                    age: 17,
                    subject: "math"
                }
            ]
        },
        {
            school: "Middle school",
            state: "Oklahoma",
            startingYear: 2012,
            finishingYear: 2015,
            bestfriends: [
                {
                    name: "Collin",
                    age: 17,
                    subject: "English"
                },
                {
                    name: "Noah",
                    age: 17,
                    subject: "Science"
                }
            ]
        },
        {
            school: "High School",
            state: "Utah",
            startingYear: 2016,
            finishingYear: 2020,
            bestfriends: [
                {
                    name: "Sidney",
                    age: 16,
                    subject: "JROTC"
                },
                {
                    name: "Donaven",
                    age: 18,
                    subject: "Government",
                }
            ]
        },
    ]
}; 
console.log (students)



