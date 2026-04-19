// Function to format the name properly
function formatName(firstName, lastName) {
  // Remove extra spaces
  const cleanFirst = firstName.trim();
  const cleanLast = lastName.trim();

  // Make first name Title Case (Esther)
  const formattedFirst =
    cleanFirst.charAt(0).toUpperCase() + cleanFirst.slice(1).toLowerCase();

  // Make last name ALL CAPS (OGBU)
  const formattedLast = cleanLast.toUpperCase();

  // Return in the format: LASTNAME, Firstname
  return `${formattedLast}, ${formattedFirst}`;
}

console.log(formatName('  esther  ', '  ogbu  '));