// descriptor object
let myDiscription = {
  name: "Madison White",
  career: "Full Stack Student",
  description: "I like to learn new things",
};

console.log("Name: " + myDiscription.name.toUpperCase());
console.log("Career: " + myDiscription.career);
console.log("Description: " + myDiscription.description);

// interests array
console.log("\nMy Interests:");
let myInterests = [
  "Coding",
  "Long walks on the beach",
  "Music",
  "Rollercoasters",
];
for (let index = 0; index < myInterests.length; index++)
  if (myInterests[index]) {
    console.log("* " + myInterests[index]);
  }

// prev experience
console.log("\nMy Previous Experience:");

function displayPosition(jobName, jobTitle, jobDescription) {
  console.log("* " + jobName + jobTitle + ": " + jobDescription);
}
displayPosition(
  "NASA ",
  "Astronaut ",
  "I went to space, studied rocket science, and ate space food."
);
displayPosition(
  "UN ",
  "Diplomat ",
  "I dealt with international conflicts, spoke french, and held meetings."
);
displayPosition(
  "Atlantic Records ",
  "Pop Star ",
  "I sang pop songs, toured the world, and performed at the Grammys."
);

// my skills
function displaySkill(skillName, isCool) {
  if (isCool == true) {
    console.log("BAM: " + skillName);
  } else {
    console.log(skillName);
  }
}
console.log("\nMy Skills:");
displaySkill("French", true);
displaySkill("HTML", false);
displaySkill("Ballet", true);
displaySkill("Sewing", false);
displaySkill("Word", false);
