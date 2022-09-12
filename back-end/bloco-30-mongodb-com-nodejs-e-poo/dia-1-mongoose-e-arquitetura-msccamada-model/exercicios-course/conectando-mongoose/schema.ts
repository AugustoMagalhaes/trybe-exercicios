import { Schema } from 'mongoose';

interface IBook {
  title: string,
  author: string,
}

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }});