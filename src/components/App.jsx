import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import notebooks from '../../notebooks';

class App extends PureComponent
{
  render() {
    return <main>
      <header>
        <h1>notes</h1>
        <nav>
          <ul>
            { Object.keys(notebooks).map(name =>
              <li key={`nb-${name}`}>
                <Link to={`/nb/${name}`}>{name}</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <article className="container">
        {this.props.children}
      </article>
    </main>;
  }
}

export default App;
