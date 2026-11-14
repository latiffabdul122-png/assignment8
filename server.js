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

// Custom Middleware 1: Request Logger
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

// Custom Middleware 2: Request Counter
// Increments the global counter for every incoming HTTP request
app.use((req, res, next) => {
    requestsServed++;
    next();
});

// Built-in Middleware to serve static files from 'public' directory
app.use(express.static('public'));
// Returns the list of available university courses in JSON format
// API Routes
app.get('/api/courses', (req, res) => {
    res.json(COURSES);
});

app.get('/api/stats', (req, res) => {
    res.json({
        totalRequests: requestsServed,
        uptime: process.uptime(),
        timestamp: new Date()
    });
});

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to Assignment 8 Express Server!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running live at http://localhost:${PORT}`);
});