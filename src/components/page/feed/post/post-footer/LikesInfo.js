export default function LikesInfo({ likesImage, likesUser, likesCounter }) {
  return (
    <div className="likes-info">
      <img src={`./assets/micro/${likesImage}.png`} alt={likesUser} />
      <p>
        Curtido por <strong>{likesUser}</strong> e{" "}
        <strong>outras {likesCounter.toLocaleString("pt-br")} pessoas</strong>
      </p>
    </div>
  );
}
