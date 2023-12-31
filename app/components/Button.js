"use client"
import Link from "next/link";

export function ModeButton({ children, style}) {
    return (
      <DefaultButton style={`md:px-3 px-2 md:py-1.5 py-1 md:text-2xl text-sm ${style}`}
      click={function(){if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }}}>
        {children}
      </DefaultButton>
    );
  }

export function LinkButton({title, current, target, style}) {
    if (current==="shi")
    return (
      <BadButton style={`md:px-10 px-8 md:py-5 py-4 md:text-2xl text-md w-full h-12 md:h-20 ${style}`}
      click={function(){window.location.href=`${target}`}}>
        {title}
      </BadButton>
  )
  else
    return (
      <DefaultButton style={`md:px-10 px-8 md:py-5 py-4 md:text-2xl text-md w-full h-12 md:h-20 ${style}`}
          click={function(){window.location.href=`${target}`}}>
            {title}
      </DefaultButton>
    );
}

function DefaultButton({children, style, click}) {
    return (
      <button
        className={`bg-white border-black text-black md:hover:bg-black md:hover:border-white md:hover:text-white
        dark:bg-black dark:border-white dark:text-white dark:md:hover:bg-white dark:md:hover:border-black dark:md:hover:text-black
        inline-flex items-center justify-center font-medium bg-transparent border rounded-lg md:rounded-2xl transition-colors ${style}`}
        onClick={click}
      >
        {children}
      </button>
    );
  } 

  function BadButton({children, style, click}) {
    return (
      <button
        className={`bg-white border-black text-white md:hover:bg-black md:hover:border-white md:hover:text-black
        dark:bg-black dark:border-white dark:text-white dark:md:hover:bg-white dark:md:hover:border-black dark:md:hover:text-black
        inline-flex items-center justify-center font-medium bg-transparent border rounded-lg md:rounded-2xl transition-colors ${style}`}
        onClick={click}
      >
        {children}
      </button>
    );
  } 