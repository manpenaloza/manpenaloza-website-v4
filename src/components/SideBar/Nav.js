import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';

export default function Nav({ sections = [] }) {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          <>
            {sections.map(s => {
              return (
                <li key={s.id}>
                  <Scroll type="id" element={s.id}>
                    <a href={`#${s.id}`} id="top-link">
                      <span className={`icon ${s.icon}`}>{s.name}</span>
                    </a>
                  </Scroll>
                </li>
              );
            })}
            {/* blog will be part of the webpage soon   */}
            <li key="blog">
              <a href="https://www.linkedin.com/in/penalozamanuel/detail/recent-activity/posts/" id="top-link" target="_blank">
                <span className={`icon fa-book`}>Blog</span>
              </a>
            </li>
          </>
        </Scrollspy>
      </ul>
    </nav>
  );
}
