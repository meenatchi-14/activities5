console.log(".........................................");
console.log("My Resume data in JSON format");
const resume= {  
    "basics":[ {
        "name": "MEENATCHI.V",
        "email": "meenatchicse44@gamil.com",
        "DOB":16-10-1996,
        "phone": 8508409709,
        "degree": "B.E",
        "location": {
          "address": "13/42,kk nagar,5th street,ayanavaram",
          "postalCode": 600023,
          "city": "Chennai",
          "state": "Tamilnadu",
          "country": "India"},
        "profiles": 
            {"github":"https://github.com/meenatchi-14"}
                }],
                "education": [
                    {
                      "university":"Anna University",
                      "institution": "Velalar College Of Engineering and Technolog",
                      "course":"engineering",
                      "department": "Computer Science Engineering",
                      "studyType": "Fulltime",
                      "batch_start_year": 2015,
                      "batch_end_year": 2018,
                      "gpa": 7.3,
                    },
                    {
                    "university":"dote",
                    "institution": "Konghu Velalar Palytecnic College",
                    "course":"Diploma",
                    "department": "Computer Science Engineering",
                    "studyType": "Fulltime",
                    "batch_start_year": 2012,
                    "batch_end_year": 2015,
                    "Percentage":95,
                    },
                    {
                        "board":"Board",
                        "institution":"Goverment Higher Secondary School",
                        "course":"SSLC",
                        "studyType": "Fulltime",
                        "batch_end_year": 2012,
                        "Percentage":82,
                    }
                  ], 
                  "skills": [
                    {
                      "name": "Javasript,html,css,sql",
                      "learn":"full Stack Development",
                      "level": "beginer",
                      "Field_of_interest": [
                        "web development"
                      ]
                    }
                  ], 
                  "languages": [
                    {
                      "language": "Tamil,Enlish",
                    }
                  ],   
                  "extra_Curticular_Activities":[
                    {
                        "game":"Chess",
                    }
                  ],
                  "interests": [
                    {
                      "hobbies": "Art and Craft",
                    }
                  ]  
};
console.log(resume);
