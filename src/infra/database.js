import mongoose from 'mongoose';
import { MONGODB_URI } from '../config.js';

// eslint-disable-next-line require-jsdoc
export function connect() {
  try {
    mongoose.connect(
      MONGODB_URI,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
    );
  } catch (error) {
    console.error(error.message);
  }
}
