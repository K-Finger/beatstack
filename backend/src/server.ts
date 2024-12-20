import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../../frontend')));

// Route for the index page
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../frontend/pages/index.html'));
});

// Route for the login page
app.get('/login', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../frontend/pages/login.html'));
});

// Route for the signup page
app.get('/signup', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../frontend/pages/signup.html'));
});

// API route for sign-up functionality
app.post('/api/signup', (req: Request, res: Response) => {
    console.log('Received sign-up request:', req.body);
    res.status(200).json({ message: 'Sign-up successful' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
