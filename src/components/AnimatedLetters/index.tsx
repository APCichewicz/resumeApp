import './index.scss'

export const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((letter, i) => {
        if (letter === ' ') {
          // Return a non-breaking space for whitespace
          return <span key={i} className={letterClass}>&nbsp;</span>;
        }
        return (
          <span
            key={i}
            className={`${letterClass} ${letterClass}-${idx + i}`}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
};

