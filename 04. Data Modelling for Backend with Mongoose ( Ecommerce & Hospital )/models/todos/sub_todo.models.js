import mongoose, { model } from 'mongoose'
import { User } from './user.models'

const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,

  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy : {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)