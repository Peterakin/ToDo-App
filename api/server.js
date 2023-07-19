const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const uri = "mongodb+srv://peterakinlosotu:PE2003ter@cluster0.jkzdnan.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json());
app.use(cors());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to DB"))
  .catch(err => {
    console.error("Failed to connect to DB:", err);
    process.exit(1);
  });

const Todo = require('./models/Todo');

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: 'Internal server error' });
});

app.get('/todos', async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    next(error);
  }
});

app.post('/todo/new', async (req, res, next) => {
  try {
    const { text } = req.body;
    const todo = new Todo({ text });
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    next(error);
  }
});

app.delete('/todo/delete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(deletedTodo);
  } catch (error) {
    next(error);
  }
});

app.get('/todo/complete/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    todo.complete = !todo.complete;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    next(error);
  }
});

app.listen(1602, () => console.log("Server started on port 1602"));
