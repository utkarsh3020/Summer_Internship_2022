// Declare function to check grade
function exam_status(totmarks,is_exam)
  {
  if (is_exam) {
    return totmarks >= 90;
  }
 return (totmarks >= 89 && totmarks <= 100);
 }

console.log(exam_status("85", " "));
console.log(exam_status("59", "true "));
console.log(exam_status("99", "false"));
