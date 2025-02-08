import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send("Welcome to my API, My name is Otega")
})

app.get('/user', (req, res) => {
	const currentTime = new Date().toISOString();
	const result = {
		email : "otiteotega@gmail.com",
		current_time : currentTime,
		github_url  : "https://github.com/Tega96/HNG_API" 
	}
	res.json(result);
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
