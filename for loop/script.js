const resumeData = {
    "personal_information": {
        "name": "Bavithra",
        "address": "2/1552 y, Ramasamy nagar, Sithurajapuram, Sivakasi, virudhungar dt, Tamil Nadu.",
        "phone": "12345-67890",
        "email": "bavithra.sjh@gmail.com"
      },
      "education": [
        {
          "degree": "B.E",
          "branch": "Electronics and Communication Engineering",
          "college": "Ramco Institute of Technology",
          "graduation_year": 2019
        }
      ],
      "experience": [
        {
          "title": "Intern, Frontend Developer",
          "company": "Techxle Consultancy pvt ltd",
          "location": "Coimbatore, Tamil Nadu",
          "start_date": "March 2023",
          "end_date": "Present",
        }
      ],
      "skills": [
      {
        "Programming languages": "C, JavaScript",
        "Web development": "HTML, CSS, Angular",
        "Version control": "Git",
      }
      
      ]
}

console.log("\nUsing for loop");
for (let ind = 0; ind < resumeData.experience.length; ind++) {
  console.log(resumeData.experience[ind]);
}

console.log("\nUsing for...in loop:");
for (let key in resumeData) {
    console.log(key, ":", resumeData[key]);
}

console.log("\nUsing for...of loop");
for (let degree of resumeData.education) {
  console.log(degree);
}

console.log("\nUsing forEach loop");
resumeData.skills.forEach(skill => {
  console.log(skill);
});
