"use client"
export function FilledButton({ children, style}) {
    return (
      <DefaultButton style={`bg-white border-black text-black md:hover:bg-black md:hover:border-white md:hover:text-white
      dark:bg-black dark:border-white dark:text-white dark:md:hover:bg-white dark:md:hover:border-black dark:md:hover:text-black ${style}`}>
        {children}
      </DefaultButton>
    );
  }

function DefaultButton({ children, style }) {
    return (
      <button
        className={`inline font-medium bg-transparent border md:px-3 px-2 md:py-1.5 py-1 md:text-2xl text-sm rounded-2xl transition-colors ${style}`}
        onClick={function(){if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      }}}
      >
        {children}
      </button>
    );
  } 