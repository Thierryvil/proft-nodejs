import mongoose, {Schema} from 'mongoose';

const SalesSchema = new Schema(
    {
      date: Date,
      seller: String,
      sold: Number,
      sales: Number,
    },
);

const SalesModel = mongoose.model('Schema', SalesSchema);

export {SalesModel};
