import { Router } from "express";
import { verify } from "jsonwebtoken";
import {
  signin,
  signup,
  getUsers,
  deleteProject,
  getProject,
  getCompletedProjects,
  getProjects,
  insertProject,
  updateProject,
  checkUser,
  completeProject,
  getallUsers
} from "../controllers/controller";
import { VerifyToken } from "../middleware/verifyToken";

const router = Router();


router.get("/all",VerifyToken, getallUsers)
router.get('/notassigned',VerifyToken, getUsers)
router.post("/login", signin);
router.post("/signup", signup);
router.get("/check",VerifyToken, checkUser);

router.get("/", VerifyToken, getProjects);
router.get("/completed", getCompletedProjects);
router.get("/:id", getProject);
router.put("/complete/:id",completeProject)
router.post("/", insertProject);
router.put("/:id", updateProject);
router.delete("/:id", VerifyToken,deleteProject);

export default router;
