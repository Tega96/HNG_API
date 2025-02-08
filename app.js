import express from 'express';

const app = express();
const port = 3000;

app.use(express.JSON());

app.get('/', (req, res) => {
	const currentTime = new Date().toISOString();
	const result = {
		email = "otiteotega@gmail.com",
		current_time : currentTime,
		github_url  : "https://github.com/Tega96/HNG_API" 
	}
	res.JSON(result);
});

app.listen(port, (req, res) => {
	console.log(`Server is listening on port ${port};
});
