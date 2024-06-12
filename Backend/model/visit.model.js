
import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  visitDates: {
    type: [Date],
    required: true,
  },
});

const Visit = mongoose.model('Visit', visitSchema);
export default Visit;


