export const highlightText = (text: string, accentWords: string[]) => {
  const regex = new RegExp(`(${accentWords.join("|")})`, "gi");

  return text.split(regex).map((part, index) =>
    accentWords.includes(part) ? (
      <span key={index} className="text-themeAccentColor transition">
        {part}
      </span>
    ) : (
      part
    )
  );
};
