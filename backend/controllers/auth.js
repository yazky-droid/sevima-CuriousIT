import { db } from '../db.js'

export const register = (req, res) => {

    // CHECK USER ALREADY HAVE AN ACCOUNT
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

        
        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            req.body.password,
        ];

        db.query(q, [values], (err, data)=>{
            if (err) return res.json(err);
            return res.status(200).json("User account has been created!");
        })
    })
}

export const login = (req, res) => {
  //CHECK USER

  const q = "SELECT * FROM users WHERE username = ? and password = ?";
  db.query(q, [req.body.username, req.body.password], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
     
    return res.json(data[0]);
})

}

export const logout = (req, res) => {
    
}