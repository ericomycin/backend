import express from "express";

const router = express.Router();
const users = [
  {
    id: 1,
    name: "Eric",
    age: "24",
    occupation: "pharmacist"
  },
  {
    id: 2,
    name: "Beatrice",
    age: "67",
    occupation: "plumber"
  },
  {
    id: 3,
    name: "Opoku",
    age: "45",
    occupation: "oncologist"
  }
]

router.get("/users", (req,res)=>{
    res.send(users);
    console.log("Users route")
})

// router.get("*",(req, res) =>{
//   res.send("<h1>Opps, Wrong page</h1>")
// })

router.get("/users/:id", (req, res) =>{
  res.send(`You are listening on ${req.params.id}`)
})

router.post("/users/:num", (req,res)=>{
  const newSet = req.body
  users.push(newSet)
  res.send(req.body);
  console.log(newSet)
  console.log(req)
})

export default router