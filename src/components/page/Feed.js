export default function Feed() {
  return (
    <div className="feed">
      <article className="post">
        <div className="post-header">
          <img src="./assets/small/meowed.png" alt="meowed" />
          <h2>meowed</h2>
          <ion-icon className="right-icon" name="ellipsis-horizontal"></ion-icon>
        </div>

        <img src="./assets/posts/cat.png" alt="gatinho com celular nas patas" />

        <div className="post-footer">
          <div className="reactions">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon className="right-icon" name="bookmark-outline"></ion-icon>
          </div>

          <div className="likes-info">
            <img src="./assets/micro/respondeai.png" alt="respondeai" />
            <p>
              Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
            </p>
          </div>

          <div className="comments">
            <button className="all-comments">Ver todos os 12.345 comentários</button>

            <div className="comment">
              <p>📱 do 😺 melhor que o meu!</p>
              <ion-icon name="heart-outline"></ion-icon>
            </div>

            <div className="new-comment">
              <ion-icon name="happy-outline"></ion-icon>
              <input type="text" placeholder="Adicione um comentário" />
              <button>Publicar</button>
            </div>
          </div>
        </div>
      </article>

      <article className="post">
        <div className="post-headexr">
          <img src="./assets/small/barked.png" alt="barked" />
          <h2>barked</h2>
          <ion-icon className="right-icon" name="ellipsis-horizontal"></ion-icon>
        </div>

        <img src="./assets/posts/dog.png" alt="cachorro dormindo" />

        <div className="post-footer">
          <div className="reactions">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon className="right-icon" name="bookmark-outline"></ion-icon>
          </div>

          <div className="likes-info">
            <img src="./assets/micro/adorableanimals.png" alt="adorable_animals" />
            <p>
              Curtido por <strong>adorable_animals</strong> e<strong>outras 99.159 pessoas</strong>
            </p>
          </div>

          <div className="comments">
            <button className="all-comments">Ver todos os 9.876 comentários</button>

            <div className="comment">
              <p>Owww! Queria ser fofa assim dormindo 💤</p>
              <ion-icon name="heart-outline"></ion-icon>
            </div>

            <div className="new-comment">
              <ion-icon name="happy-outline"></ion-icon>
              <input type="text" placeholder="Adicione um comentário" />
              <button>Publicar</button>
            </div>
          </div>
        </div>
      </article>

      <article className="post">
        <div className="post-header">
          <img src="./assets/small/meowed.png" alt="meowed" />
          <h2>meowed</h2>
          <ion-icon className="right-icon" name="ellipsis-horizontal"></ion-icon>
        </div>

        <video controls autoPlay muted>
          <source src="./assets/posts/video.mp4" type="video/mp4" />
          <source src="./assets/posts/video.ogg" type="video/ogg" />
        </video>

        <div className="post-footer">
          <div className="reactions">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon className="right-icon" name="bookmark-outline"></ion-icon>
          </div>

          <div className="likes-info">
            <img src="./assets/micro/respondeai.png" alt="respondeai" />
            <p>
              Curtido por <strong>respondeai</strong> e <strong>outras 123.456 pessoas</strong>
            </p>
          </div>

          <div className="comments">
            <button className="all-comments">Ver todos os 23.456 comentários</button>

            <div className="comment">
              <p>😻 fofo D+!</p>
              <ion-icon name="heart-outline"></ion-icon>
            </div>

            <div className="new-comment">
              <ion-icon name="happy-outline"></ion-icon>
              <input type="text" placeholder="Adicione um comentário" />
              <button>Publicar</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
