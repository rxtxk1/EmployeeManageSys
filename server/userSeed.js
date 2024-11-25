import User from './models/User.js';
import bcrypt from 'bcrypt';
import connectToDatabase from './db/db.js';

const userRegister = async () => {
  try {
    // Wait for the database connection
    await connectToDatabase();

    // Hash the password for security
    const hashedPassword = await bcrypt.hash("admin", 10);

    // Create the new user
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin"
    });

    // Save the user to the database
    await newUser.save();
    console.log("User successfully created!");
  } catch (error) {
    console.log("Error during user registration:", error);
  }
};

userRegister();