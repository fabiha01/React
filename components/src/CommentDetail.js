import { faker } from "@faker-js/faker";

const CommentDetail = () => {
  return ( 
    <div class="comment">
      <a class="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div class="content">
        <a class="author">Matt</a>
        <div class="metadata">
          <span class="date">Today at 5:42PM</span>
        </div>
        <div class="text">
          How artistic!
        </div>
      </div>
    </div>
   );
}
 
export default CommentDetail;