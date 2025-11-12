import express from 'express';
import todoRoutes from "./routes/todos.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/todos", todoRoutes);
app.use((error, req, res, next) => {
    res.json({ error: error.message });
});
app.listen(3001, () => {
    console.log("listening on http://localhost:3001");
});
//# sourceMappingURL=app.js.map