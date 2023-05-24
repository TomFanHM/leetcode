export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/pexels-anna-shvets-3987114.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Cracking Leetcode</h1>
          <p className="py-6">
            By recording and sharing our answers with you, we'll guide you
            through the process, helping you build the confidence and skills.
          </p>
          <a href="/articles/">
            <button className="btn btn-primary">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
}
