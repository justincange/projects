import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
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
      </ul>
    </header>
  );
});
