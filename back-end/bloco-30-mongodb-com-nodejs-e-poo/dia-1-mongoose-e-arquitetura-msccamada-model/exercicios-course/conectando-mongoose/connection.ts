import { connect } from 'mongoose';

const options = {
  user: 'user',
  pass: 'password',
  autoIndex: false,
  dbName: 'glassesStore',
};

connect('mongodb://localhost:27017/', options);
