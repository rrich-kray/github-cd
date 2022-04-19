const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "First Name is Required",
    },

    lastName: {
      type: String,
      trim: true,
      required: "Last Name is Required",
    },

    password: {
      type: String,
      trim: true,
      required: "Password is Required",
      validate: [({ length }) => length >= 6, "Password should be longer."],
    },

    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },

    userCreated: {
      type: Date,
      default: Date.now,
    },
  },

  // Set the `toJSON` schema option to use virtuals
  {
    toJSON: {
      virtuals: true,
    },

    // Set the `id` as false
    id: false,
  }
  // YOUR CODE HERE
  //
);

// Create a virtual property `username` that's computed from the front part of `email` before the `@` symbol.
// YOUR CODE HERE
UserSchema.virtual("username").get(function () {
  // return this.email.split("@")[0];
  return this.email.slice(0, this.email.indexOf("@"));
});

const User = model("User", UserSchema);

module.exports = User;
