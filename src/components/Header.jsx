import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import githubIcon from '../images/github.svg';
import notebooks from '../../notebooks';

class Header extends PureComponent
{
  render() {
    return <header>
      <nav>
        <h1>
          <Link to="/">notes</Link>
        </h1>
        <ul>
          { Object.keys(notebooks).map(name =>
            <li key={`nb-${name}`}>
              <Link to={`/nb/${name}`}>{name}</Link>
            </li>
          )}
        </ul>
      </nav>
      <aside>
        <a href="https://github.com/n6g7/notes" title="GitHub repository" target="blank">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </aside>
    </header>;
  }
}

export default Header;
