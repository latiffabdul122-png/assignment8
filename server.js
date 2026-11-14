
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Hard-coded Data Constants
const COURSES = [
    { id: 1, title: 'Introduction to Computer Engineering', credits: 5 },
    { id: 2, title: 'Data Structures and Algorithms', credits: 6 },
    { id: 3, title: 'Web Backend Development', credits: 5 }
];

let requestsServed = 0;

// Test route
app.get('/', (req, res) => {
    res.send("Server is running!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running live at http://localhost:${PORT}`);
});