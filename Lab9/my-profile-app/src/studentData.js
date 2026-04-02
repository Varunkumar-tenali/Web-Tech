export const student = {
  name:       "Varun Kumar",
  id:         "23BCE9454",
  department: "Computer Science",
  year:       "Third Year",
  section:    "VIT - L1",
  status:     "Enrolled",
};

export function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
