import 'reflect-metadata';
import express from 'express';
import { DataSource, getRepository } from 'typeorm';
import { User } from './entity/User';
import { Post } from './entity/Post';

const app = express();
app.use(express.json());

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "test_db",
  entities: [User,Post],
  synchronize: true,
});

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const initializeDatabase = async () => {
  await wait(20000);
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    console.error("Error during Data Source initialization:", err);
    process.exit(1);
  }
};

initializeDatabase();

app.post('/users', async (req: { body: { firstName: string; lastName: string; email: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: User): void; new(): any; }; }; }) => {
// Crie o endpoint de users
  const user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;

        const userRepository = getRepository(User);
        await userRepository.save(user);
        res.status(201).json(user);
});

app.post('/posts', async (req: { body: { title: string; description: string; userId: User; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Post): void; new(): any; }; }; }) => {
// Crie o endpoint de posts
        const post = new Post();
        post.title = req.body.title;
        post.description = req.body.description;
        post.userId = req.body.userId; // Assumindo que userId é passado no corpo da requisição

        const postRepository = getRepository(Post);
        await postRepository.save(post);
        res.status(201).json(post);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function setTimeout(resolve: (value: unknown) => void, ms: number): void {
  throw new Error('Function not implemented.');
}
