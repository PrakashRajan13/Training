let resume_details=JSON.parse(localStorage.getItem("resume"));
let url_string=window.location.search;
  let urlParams = new URLSearchParams(url_string);
  let url = urlParams.get('name')
  // alert(url);   
  for(let i=0;i<resume_details.length;i++){
    if(url==resume_details[i].name){
      document.getElementById("name").innerHTML=resume_details[i].name;
      document.getElementById("email").innerHTML=resume_details[i].email;
      document.getElementById("mobile").innerHTML=resume_details[i].mobile;
      document.getElementById("rolename").innerHTML=resume_details[i].role;
      document.getElementById("career_objective").innerHTML=resume_details[i].career_objective;
                                 // education
      let edu=resume_details[i].education;
      console.log(edu)
      for(let i=0;i<edu.length;i++){
           document.getElementById("course"+i).innerHTML=edu[i].course;
          document.getElementById("instutite"+i).innerHTML=edu[i].instutite;
          document.getElementById("year"+i+"").innerHTML=edu[i].year;
          document.getElementById("percentage"+i).innerHTML=edu[i].percentage;
      }
                      // Experience
      let experience=resume_details[i].experience
      console.log(experience[i])
      for(let i=0;i<experience.length;i++){
        document.getElementById("organisation"+i).innerHTML=experience[i].organisation;
        document.getElementById("role"+i).innerHTML=experience[i].role;
        document.getElementById("period"+i).innerHTML=experience[i].period;
        document.getElementById("contact"+i).innerHTML=experience[i].contact;
      }
                                // skills  
        document.getElementById("skills").innerHTML=resume_details[i].skill;
                         // projects
      let projects=resume_details[i].project;
      for(let i=0;i<projects.length;i++){
        document.getElementById("title"+i).innerHTML=projects[i].title;
        document.getElementById("time"+i).innerHTML=projects[i].year;
        document.getElementById("abstract"+i).innerHTML=projects[i].abstract;
      }
                    // personal_details
      document.getElementById("father_name").innerHTML=resume_details[i].personaldetails.fathername;
      document.getElementById("mother_name").innerHTML=resume_details[i].personaldetails.mothername;
      document.getElementById("DOB").innerHTML=resume_details[i].personaldetails.DOB;
      document.getElementById("address").innerHTML=resume_details[i].personaldetails.address;
      document.getElementById("gender").innerHTML=resume_details[i].personaldetails.gender;
      document.getElementById("martial_status").innerHTML=resume_details[i].personaldetails.martialstatus;
      document.getElementById("hobbies").innerHTML=resume_details[i].hobbies;
      document.getElementById("language").innerHTML=resume_details[i].language;
      // decclaration
      document.getElementById("declaration").innerHTML=resume_details[i].declaration;
      document.getElementById("sign").innerHTML=resume_details[i].name;

    }
  }