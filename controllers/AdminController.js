import Admin from "../models/AdminModel";

const getAdmin = async (req, res) => {
  try {
    const getAdmin = await Admin.find();
    res.json(getAdmin);
  } catch (error) {
    console.log(error);
  }
};

const getAdminById = async (req, res) => {
  try {
    const getAdminById = await Admin.findById(req.params.id);
    res.json(getAdminById);
  } catch (error) {
    console.log(error);
  }
};

const addAdmin = async (req, res) => {
  const admin = new Admin(req.body);
  try {
    const addAdmin = await admin.save();
    res.json(addAdmin);
  } catch (error) {
    console.log(error);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const updateAdmin = await Admin.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updateAdmin);
  } catch (error) {
    console.log(error);
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const deleteAdmin = await Admin.deleteOne({ _id: req.params.id });
  } catch (error) {
    console.log(error);
  }
};

export { getAdmin, getAdminById, addAdmin, updateAdmin, deleteAdmin };
