type Subject = 'Jenkins' | 'AWS' | 'Linux' | 'Kubernetes';

interface Score {
    name: string;
    subject: Subject;
    number: number;
}

interface Total {
    name: string;
    total: number;
}

const scores: Score[] = [
    { name: 'Hasan', subject: 'Jenkins', number: 45 },
    { name: 'Habib', subject: 'Jenkins', number: 56 },
    { name: 'Hasan', subject: 'AWS', number: 97 },
    { name: 'Habib', subject: 'AWS', number: 43 },
    { name: 'Hasan', subject: 'Linux', number: 76 },
    { name: 'Habib', subject: 'Linux', number: 88 },
    { name: 'Hasan', subject: 'Kubernetes', number: 65 },
    { name: 'Habib', subject: 'Kubernetes', number: 70 },
    { name: 'Ayesha', subject: 'Jenkins', number: 90 },
    { name: 'Ayesha', subject: 'AWS', number: 80 },
    { name: 'Ayesha', subject: 'Linux', number: 85 },
    { name: 'Ayesha', subject: 'Kubernetes', number: 78 }
];

// Function to calculate total score of a student
function getTotalScore(studentName: string, scores: Score[]): number {
    return scores
        .filter(score => score.name === studentName) // Get only scores for the student
        .reduce((total, score) => total + score.number, 0); // Sum up the scores
}

// Get unique student names
const studentNames = [...new Set(scores.map(score => score.name))];

// Loop through all students and print their total scores
for (const student of studentNames) {
    console.log(`Total Score of ${student}:`, getTotalScore(student, scores));
}
