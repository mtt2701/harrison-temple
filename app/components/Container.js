export default function Container({children,style}) {
    return (
    <div className={`max-w-7xl p-4 mx-auto ${style}`}>
        {children}
    </div>
    )
  }