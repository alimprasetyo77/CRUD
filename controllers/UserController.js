import User from "../models/UserModel";

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const insertUser = await user.save();
    res.json(insertUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { id: req.params.id },
      { $set: req.body }
    );
    res.json(updateUser);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUser = await User.deleteOne({ _id: id });
    res.json(deleteUser);
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, getUserById, saveUser, updateUser, deleteUser };
