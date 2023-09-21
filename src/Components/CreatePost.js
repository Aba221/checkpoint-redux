import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../JS/Actions/actions';
import '../App.css';

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (post) => dispatch(addPost(post)),
  };
};

const CreatePost = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addArticle({
      id: Date.now(),
      title,
      content,
    });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <div>
        <label htmlFor="Title">Titre</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Content">Contenu:</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div>
        <input type="submit" value="Ajouter" />
      </div>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(CreatePost);
