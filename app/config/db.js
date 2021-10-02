import mongoose from 'mongoose';

const dbUrl = "mongodb+srv://test123:test123@cluster0.vb5tw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const db = {
  url: dbUrl,
  mongoose: mongoose
}

export default db