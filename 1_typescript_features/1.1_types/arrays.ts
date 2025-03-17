type Subject = 'Jenkins' | 'AWS' | 'Linux' | 'Kubernetes'; //type literal

interface Score {
    name: string;
    subject: Subject;
    number: number;
}

interface Total {
    name: string;
    total: number;
}

const totalScores: Total[] = [];
let rank: number = 1;

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
    const totalmarks = getTotalScore(student, scores);
    totalScores.push({
        name: student,
        total: totalmarks
    })
}

totalScores.sort((a, b) => b.total - a.total);
//sort((a, b) => b.total - a.total) sorts the array in descending order (highest total first).
//b.total - a.total ensures that higher values appear before lower ones.

for (const totalScore of totalScores) {
    console.log(`Total Score of ${totalScore.name}: ${totalScore.total} (${rank})`);
    rank++;
}
