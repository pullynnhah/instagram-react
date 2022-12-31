import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      user: "meowed",
      post: "cat",
      isVideo: false,
      userLikesSrc: "respondeai",
      userLikes: "respondeai",
      likes: 101523,
      comments: 3289,
      comment: "📱do gato melhor que o meu!",
    },
    {
      user: "barked",
      post: "dog",
      isVideo: false,
      userLikesSrc: "adorableanimals",
      userLikes: "adorable_animals",
      likes: 99159,
      comments: 3289,
      comment: "Owww. Queria ser fofa assim dormindo💤",
    },
    {
      user: "meowed",
      post: "video",
      isVideo: true,
      userLikesSrc: "respondeai",
      userLikes: "respondeai",
      likes: 123456,
      comments: 3289,
      comment: "Muitooo fofo 😻!",
    },
  ];

  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.post} {...post} />
      ))}
    </div>
  );
}
