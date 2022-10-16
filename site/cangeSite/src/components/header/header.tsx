import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header>
      <div style={{
        textColor: 'black',
        textDecoration: 'none !important',
      }}> 
        <li>
          <a href="/" target="_self">
          Home 
          </a>
        </li>
        <li>
          <a href="/about" target="_self">
          About Me
          </a>
        </li>
        <li>
          <a href="/contact" target="_self">
            Contact
          </a>
        </li>
        <li>
          <a href="/structure" target="_self">
            Website Stack
          </a>
        </li>
        </div>
    </header>
  );
});
