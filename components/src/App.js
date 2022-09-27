import CommentDetail from "./CommentDetail";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

const App = ()  => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" image={faker.image.avatar()} blogText="Whoa!" />  
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="alex" timeAgo="Today at 2:00AM" image={faker.image.avatar()} blogText="More New Recipes" />  
      </ApprovalCard>
     
     <ApprovalCard>
      <CommentDetail author="jane" timeAgo="Yesterday at 5:00PM" image={faker.image.avatar()} blogText="My new blog" />  
     </ApprovalCard>
      
    </div>
  );
}

export default App;
