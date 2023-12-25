export default function LargeButton({ children, style}) {
    return (
      <DefButton style={`flex inline font-medium bg-transparent border md:px-10 px-8 md:py-5 py-4 md:text-2xl text-sm rounded-2xl transition-colors  ${style}`}>
        {children}
      </DefButton>
    );
  }

function DefButton({ children, style }) {
    return (
      <button
        className={`bg-white border-black text-black md:hover:bg-black md:hover:border-white md:hover:text-white
        dark:bg-black dark:border-white dark:text-white dark:md:hover:bg-white dark:md:hover:border-black dark:md:hover:text-black ${style}`}>
        {children}
      </button>
    );
  }