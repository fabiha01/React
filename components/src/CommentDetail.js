import { faker } from "@faker-js/faker";

const CommentDetail = () => {
  return ( 
    <div className="comment">
      <a className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a className="author">Matt</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">
          How artistic!
        </div>
      </div>
    </div>
   );
}
 
export default CommentDetail;