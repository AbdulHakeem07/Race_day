// ===========================================
// 🏃 Race Day Registration System
// Author: Abdul Hakeem
// submitted to: Mr pamir khan
// ===========================================


// Task 1
// Generate a random race number between 0 - 999
let raceNumber = Math.floor(Math.random() * 1000);


// ===========================================
// Task 2
// Did the runner register early?
// ===========================================
const registeredEarly = true;


// ===========================================
// Task 3
// Runner's age
// ===========================================
const age = 25;


// ===========================================
// Task 4
// Early adults receive race numbers above 1000
// ===========================================
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}


// ===========================================
// Task 5
// Adult + Early Registration
// ===========================================
if (age > 18 && registeredEarly) {

  console.log("========================================");
  console.log("🏃 Race Registration Successful!");
  console.log("----------------------------------------");
  console.log(`🎫 Race Number : ${raceNumber}`);
  console.log("🕘 Start Time  : 9:30 AM");
  console.log("✅ Status      : Early Adult Runner");
  console.log("========================================");

}


// ===========================================
// Task 6
// Adult + Late Registration
// ===========================================
else if (age > 18 && !registeredEarly) {

  console.log("========================================");
  console.log("🏃 Race Registration Successful!");
  console.log("----------------------------------------");
  console.log(`🎫 Race Number : ${raceNumber}`);
  console.log("🕚 Start Time  : 11:00 AM");
  console.log("✅ Status      : Late Adult Runner");
  console.log("========================================");

}


// ===========================================
// Task 7
// Youth Runner
// ===========================================
else if (age < 18) {

  console.log("========================================");
  console.log("🏃 Race Registration Successful!");
  console.log("----------------------------------------");
  console.log(`🎫 Race Number : ${raceNumber}`);
  console.log("🕧 Start Time  : 12:30 PM");
  console.log("✅ Status      : Youth Runner");
  console.log("========================================");

}


// ===========================================
// Task 9
// Runner is exactly 18 years old
// ===========================================
else {

  console.log("========================================");
  console.log("⚠️ Registration Required");
  console.log("----------------------------------------");
  console.log("Please see the registration desk.");
  console.log("Age exactly 18 requires manual registration.");
  console.log("========================================");

}