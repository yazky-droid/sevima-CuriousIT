import {db} from '../db.js'

export const getPosts = (req, res) => {
    const q = "SELECT * FROM articles";
  
    db.query(q, (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
  };

  export const getPost = (req, res) => {
    const q =
      "SELECT a.id, `username`, `title`, `content`, a.img, u.img AS userImg, `url_yt` FROM users u JOIN articles a ON u.id = a.user_id WHERE a.id = ? ";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };

  export const addPost = (req, res) => {
  
      const q ="INSERT INTO articles(`title`, `content`, `img`, `url_yt`,`user_id`) VALUES (?)";
  
      const values = [
        req.body.title,
        req.body.content,
        req.body.img,
        req.body.url,
        4
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Article has been created.");
      });
  };

  export const deletePost = (req, res) => {

      const postId = req.params.id;
      const q = "DELETE FROM articles WHERE `id` = ?";
  
      db.query(q, [postId], (err, data) => {
        if (err) return res.status(403).json("You can delete only your post!");
  
        return res.json("Article has been deleted!");
      });
  };

  export const updatePost = (req, res) => {  
      const postId = req.params.id;
      const q =
        "UPDATE articles SET `title`=?,`content`=?,`img`=?,`url_yt`=? WHERE `id` = ?";
  
      const values = [req.body.title, req.body.content, req.body.img, req.body.url_yt];
  
      db.query(q, [...values, postId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Article has been updated.");
      });
  };