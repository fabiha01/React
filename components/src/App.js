import CommentDetail from "./CommentDetail";

const App = ()  => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />  
      <CommentDetail author="alex" />  
      <CommentDetail author="jane" />  
    </div>
  );
}

export default App;
