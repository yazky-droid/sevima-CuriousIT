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
    
}

export const logout = (req, res) => {
    
}