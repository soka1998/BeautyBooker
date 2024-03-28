import mongoose from "mongoose";
import validator from 'validator';

const { isEmail } = validator;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'], // Field is required
    minlength: [2, 'Name must be at least 2 characters long'], // Minimum length },
  },
    email: {  type: String,
    required: [true, 'Email is required'],
    unique: true, // Ensures email is unique in the database
    lowercase: true, // Converts email to lowercase
    validate: [isEmail, 'Please enter a valid email'], // Regex to validate email format },
    },
    password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [5, 'Password must be at least 5 characters long'],
  },
  role: { 
    type: String, 
    enum: {
      values: ['admin', 'customer', 'staff'], // Ensure these values are lowercase if `lowercase: true` is set
      message: '{VALUE} is not a supported role'
    },
    required: [true, 'Role is required'],
    lowercase: true,
    default: 'user'
  },
    phone:{
      type: String,
      match: [/^\+[1-9]\d{1,14}$/, 'Please fill a valid international phone number'],
    }
  });
  // Middleware: Run a function before user is saved to DB
// userSchema.pre('save', async function (next) {
//   const salt = await bcrypt.genSalt()
//   this.password = await bcrypt.hash(this.password, salt)
  // const salt = await bcrypt.hash(this.password,salt)
//   next()
// })

//static method to login user
// userSchema.statics.login = async function (email, password) {
//Find the user by email
//   const user = await this.findOne({ email })
//   if (user) {
//     const auth = await bcrypt.compare(password, user.password)
//     if (auth) {
//       return user
//     }
   
    
//     throw Error('incorrect password')
//   }
//   throw Error('incorrect email')
// }

const User = mongoose.model('User', userSchema);
export default User