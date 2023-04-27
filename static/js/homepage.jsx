'use strict';

function Homepage() {
  return (
  <React.Fragment>
    <h2>Hello! Welcome to our card game!</h2>
    <a href='/cards'>Click here to view the cards</a>
    <div>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
