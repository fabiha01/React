import { faker } from "@faker-js/faker";

const App = ()  => {
  return (
    <div className="ui comments">
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
      <div class="comment">
        <a class="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div class="content">
          <a class="author">Elliot Fu</a>
          <div class="metadata">
            <span class="date">Yesterday at 12:30AM</span>
          </div>
          <div class="text">
            <p>This has been very useful for my research. Thanks as well!</p>
          </div>
        </div>
        <div class="comments">
          <div class="comment">
            <a class="avatar">
            <img src={faker.image.avatar()} alt="avatar" />
            </a>
            <div class="content">
              <a class="author">Jenny Hess</a>
              <div class="metadata">
                <span class="date">Just now</span>
              </div>
              <div class="text">
                Elliot you are always so right :)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
