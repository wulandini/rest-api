import mongoose from 'mongoose';

const hawaiSchema = mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    nama belakang: {
      type: String,
      required: true,
    },
    user: {
      type: Date,
      required: true,
    },
    pasword: {
      type: String,
      required: true,
    },
    jabatan: {
        type: String,
        required: true,
  },
  {
    timestamps: true,
  }
);

const Restoran = mongoose.model('Restoran', restoranSchema);

export default Restoran;