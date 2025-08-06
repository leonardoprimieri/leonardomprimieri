interface ParseHighlightedTextProps {
  text: string;
  className?: string;
}

export function parseHighlightedText({
  text,
  className = "",
}: ParseHighlightedTextProps): React.ReactElement {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/g);

  return (
    <>
      {parts.map((part, index) => {
        const highlightMatch = part.match(/^<highlight>(.*?)<\/highlight>$/);

        if (highlightMatch) {
          const highlightedText = highlightMatch[1];

          return (
            <span
              key={index}
              className={`text-primary underline decoration-primary decoration-2 underline-offset-2 font-medium ${className}`}
            >
              {highlightedText}
            </span>
          );
        }

        return part;
      })}
    </>
  );
}
