const Icon = ({type, size}) => {
  const vectorByType = {
    "back" : <g><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></g>,
    "calendar-right": <polyline points="9 18 15 12 9 6"></polyline>,
    "calendar-left": <polyline points="15 18 9 12 15 6"></polyline>,
    "check": <polyline points="17 6 11 17 7 12"></polyline>,
    "plus": <g><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></g>,
    "more": <polyline points="6 9 12 15 18 9"/>
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {vectorByType[type]}
    </svg>
  )
};

export default Icon;