export const students = [
  { id: 1, name: "Varun Kumar",    department: "Computer Science",    marks: 91, total: 100, tags: ["Dean's List"] },
  { id: 2, name: "Ananya Sharma",  department: "Electronics & Comm",  marks: 84, total: 100, tags: ["Merit"] },
  { id: 3, name: "Rohit Mehta",    department: "Mechanical Engg",     marks: 76, total: 100, tags: ["Pass"] },
  { id: 4, name: "Priya Nair",     department: "Civil Engineering",   marks: 88, total: 100, tags: ["Merit"] },
  { id: 5, name: "Kiran Reddy",    department: "Information Tech",    marks: 95, total: 100, tags: ["Dean's List"] },
  { id: 6, name: "Sneha Patel",    department: "Biomedical Engg",     marks: 79, total: 100, tags: ["Pass"] },
];

export function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function getPercentage(marks, total) {
  return Math.round((marks / total) * 100);
}

export function getRank(percentage) {
  if (percentage >= 90) return { label: "Distinction", high: true };
  if (percentage >= 75) return { label: "First Class", high: false };
  return { label: "Pass", high: false };
}
