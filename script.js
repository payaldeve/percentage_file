const numberInput = document.getElementById('number');
const percentageInput = document.getElementById('percentage');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const number = parseFloat(numberInput.value);
    const percentage = parseFloat(percentageInput.value);
    const result = (number / 100) * percentage;
    resultParagraph.textContent = `The result is: ${result.toFixed(2)}%`;
});
// Function to calculate SGPA and CGPA
function calculateSGPAandCGPA(grades, credits) {
    let totalGradePoints = 0;
    let totalCredits = 0;
    
    // Loop through each course
    for (let i = 0; i < grades.length; i++) {
      let grade = grades[i];
      let credit = credits[i];
      
      // Calculate grade points for this course
      let gradePoints = getGradePoints(grade);
      
      // Add to total grade points and credits
      totalGradePoints += gradePoints * credit;
      totalCredits += credit;
    }
    
    // Calculate SGPA
    let sgpa = totalGradePoints / totalCredits;
    
    // Calculate CGPA (assuming we have an array of previous SGPA values)
    let cgpa = calculateCGPA(sgpa, previousSgpas);
    
    return { sgpa, cgpa };
  }
  
  // Helper function to get grade points from a grade
  function getGradePoints(grade) {
    switch (grade) {
      case 'A':
        return 4;
      case 'B':
        return 3;
      case 'C':
        return 2;
      case 'D':
        return 1;
      case 'F':
        return 0;
      default:
        return 0;
    }
  }
  
  // Helper function to calculate CGPA
  function calculateCGPA(sgpa, previousSgpas) {
    let cumulativeTotalGradePoints = 0;
    let cumulativeTotalCredits = 0;
    
    // Loop through each previous SGPA value
    for (let i = 0; i < previousSgpas.length; i++) {
      let previousSgpa = previousSgpas[i];
      cumulativeTotalGradePoints += previousSgpa * credits[i];
      cumulativeTotalCredits += credits[i];
    }
    
    // Add the current SGPA to the cumulative totals
    cumulativeTotalGradePoints += sgpa * credits[credits.length - 1];
    cumulativeTotalCredits += credits[credits.length - 1];
    
    // Calculate CGPA
    let cgpa = cumulativeTotalGradePoints / cumulativeTotalCredits;
    
    return cgpa;
  }