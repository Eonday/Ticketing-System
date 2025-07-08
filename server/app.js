
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import chatRoutes from '../routes/chatRoutes.js';
import homeRoutes from '../routes/homeRoutes.js';
import signupRoutes from '../routes/singupRoutes.js';





const app = express();
const httpServer = createServer(app);        // Wrap Express in HTTP server
const io = new Server(httpServer);           // Create Socket.io server
const PORT = 3000;

// These lines recreate __filename (current file path) and __dirname (current directory path)
// by converting the module’s URL to a file path, allowing us to use them
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Serve static files from /public, Parse forms and JSON submissions
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());   
app.use(express.urlencoded({ extended: true }));




// Route setup
app.use('/', signupRoutes);
app.use('/', chatRoutes);
app.use('/', homeRoutes); 


                                 


// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

//Registers if Server is running
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
