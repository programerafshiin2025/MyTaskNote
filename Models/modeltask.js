import mongoose from "mongoose";
const TaskScheam=mongoose.Schema({
          title:{
                    type : String,
                    require:[true, 'this required'],

          },
          data:{
                    type:String,
                    require:[true,'this is required']
          },
          finished:{
                    type:Boolean,
                    default:false
          }
})

const Task=mongoose.model('Note', TaskScheam)
export default Task
