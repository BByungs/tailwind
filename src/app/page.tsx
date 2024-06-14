export default function Home() {
  return (
    <div>
      <header className="flex items-center bg-orange-100 justify-between p-10">
        <nav>
          <ul>
            {Array.from({ length: 4 }, (_, i) => (
              <li
                key={i}
                className="hover:bg-red-400 float-left last:mr-0 mr-5 cursor-pointer"
              >
                <a>{`category${i + 1}`}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex">
          <button className="h-10 w-16 bg-red-500 rounded-md text-white">
            button
          </button>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
