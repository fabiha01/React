const CommentDetail = props => {
  const { author, timeAgo, image, blogText } = props;
  return ( 
    <div className="comment">
      <a className="avatar">
        <img src={ image } alt="avatar" />
      </a>
      <div className="content">
        <a className="author">{ author }</a>
        <div className="metadata">
          <span className="date">{ timeAgo }</span>
        </div>
        <div className="text">
         { blogText }
        </div>
      </div>
    </div>
   );
}
 
export default CommentDetail;