import article_image from "./assets/images/illustration-article.svg";
import author_pfp from "./assets/images/image-avatar.webp";

export function Card() {
  return (
    <main className="page ">
      <div className="card aspect-3/4 bg-white w-72 rounded-xl outline outline-black p-3">
        {/* IMAGE */}
        <img
          src={article_image}
          alt="Article illustration"
          className="rounded-xl mb-3"
        />
        {/* BODY */}
        <span className="card__tag p-1 font-bold text-xs ">Learning</span>
        <p className="text-[10px] text-gray-700 my-3">Published 21 Dec 2023</p>
        <h3 className="text-md font-bold mb-2">HTML & CSS foundations</h3>
        <p className="text-xs text-gray-500">
          These Languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        {/* FOOTER */}
        <div className="mt-3">
          <img
            src={author_pfp}
            alt="Article illustration"
            className="rounded-full w-6 h-6 inline-block mr-2 text-center"
          />
          <span className="text-xs text-gray-700 font-bold">Greg Hooper</span>
        </div>
      </div>
    </main>
  );
}
