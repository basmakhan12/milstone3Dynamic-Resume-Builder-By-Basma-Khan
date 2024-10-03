// listing element

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
 event.preventDefault();

 const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

 //type assertion
 const nameElement = document.getElementById('name') as HTMLInputElement;
 const emailElement = document.getElementById('email') as HTMLInputElement;
 const phoneElement = document.getElementById('phone') as HTMLInputElement;
 const educationElement = document.getElementById('education') as HTMLInputElement;
 const experienceElement = document.getElementById('experience') as HTMLInputElement;
 const skillsElement = document.getElementById('skills') as HTMLInputElement;




if ( profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value; 

      // picture Elements
  const profilePictureFile = profilePictureInput.files?.[0]
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


 // create resume output
 const resumeOutput = `
 <h2>Resume</h2>
 ${profilePictureURL} ? "<img scr = "${profilePictureURL} alt="Profile Picture" class="profilePicture"> :"")
 <p><strong>Name:</strong> ${name} </p>
 <p><strong>Email:</strong> ${email} </p>
 <p><strong>Phone Number :</strong> ${phone} </p>

 <h3>Education</h3>
 <p>${education}</p>

 <h4>Experience</h4>
 <p>${experience}</p>

  <h5>Skills</h5>
 <p>${skills}</p>
`;


  const resumeOutputElement = document.getElementById('resumeOutput')
  if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
  } else {
    console.error('The resume output elements are missing ')
    
  }
} else {
    console.error('One or more output elements are missing')

}
})