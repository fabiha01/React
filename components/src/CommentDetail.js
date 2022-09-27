import { faker } from "@faker-js/faker";

const CommentDetail = props => {
  const { author } = props;
  return ( 
    <div className="comment">
      <a className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a className="author">{ author }</a>
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