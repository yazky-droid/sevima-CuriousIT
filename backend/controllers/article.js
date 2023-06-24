import {db} from '../db.js'

export const getPosts = (req, res) => {
    const q = "SELECT * FROM posts";
  
    db.query(q, [req.query.cat], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
  };

  export const getPost = (req, res) => {
    const q =
      "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };

  export const addPost = (req, res) => {
  
      const q ="INSERT INTO posts(`title`, `content`, `img`, `url_yt`,`user_id`) VALUES (?)";
  
      const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.url,
        req.body.user_id
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been created.");
      });
  };

  export const deletePost = (req, res) => {

      const postId = req.params.id;
      const q = "DELETE FROM posts WHERE `id` = ?";
  
      db.query(q, [postId, userInfo.id], (err, data) => {
        if (err) return res.status(403).json("You can delete only your post!");
  
        return res.json("Post has been deleted!");
      });
  };

  export const updatePost = (req, res) => {  
      const postId = req.params.id;
      const q =
        "UPDATE posts SET `title`=?,`content`=?,`img`=?,`url_yt`=? WHERE `id` = ?";
  
      const values = [req.body.title, req.body.desc, req.body.img, req.body.url_yt];
  
      db.query(q, [...values, postId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Post has been updated.");
      });
  };