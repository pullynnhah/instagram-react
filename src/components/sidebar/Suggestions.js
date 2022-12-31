import Suggestion from "./Suggestion";

export default function Suggestions() {
  const suggestions = [
    {
      image: "badvibesmemes",
      user: "bad.vibes.memes",
      text: "Segue você",
    },
    {
      image: "chibirdart",
      user: "chibirdart",
      text: "Segue você",
    },
    {
      image: "razoesparaacreditar",
      user: "razoesparaacreditar",
      text: "Novo no Instagram",
    },
    {
      image: "adorableanimals",
      user: "adorable_animals",
      text: "Segue você",
    },
    {
      image: "smallcutecats",
      user: "smallcutecats",
      text: "Segue você",
    },
  ];

  return (
    <div className="suggestions">
      <div className="suggestion-header">
        <strong>Sugestões para você</strong>
        <strong>Ver tudo</strong>
      </div>
      {suggestions.map(suggestion => (
        <Suggestion key={suggestion.user} {...suggestion} />
      ))}
    </div>
  );
}
