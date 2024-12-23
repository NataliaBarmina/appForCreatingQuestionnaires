const TailwindSample = () => {
  return (
    <div>
      {/* флекс */}
      <div className="mb-12 flex w-1/2 items-center justify-around p-3 sm:invisible">
        <button className="mb-16 ml-16 inline-block animate-bounce bg-salmon/80 p-3">
          send
        </button>
        <button className="mb-16 ml-16 inline-block animate-bounce bg-pink-600 p-3">
          send
        </button>
      </div>

      {/* грид */}
      <div className="mt-15 grid grid-cols-3 gap-6 p-4">
        <div className="rotate-12 bg-blue-200 p-4">Image</div>
        <div className="translate-x-5 bg-blue-200 p-4">Image</div>
        <div className="bg-slate-100 bg-blue-200 p-4 blur-md">Image</div>
        <div className="bg-blue-200 p-4 contrast-50">Image</div>
        <div className="bg-blue-200">Image</div>
        <div className="bg-blue-200">Image</div>
        <div className="bg-blue-200">Image</div>
        <div className="bg-blue-200">Image</div>
        <div className="translate-y-15 bg-slate-100 bg-blue-200 p-4">Image</div>
      </div>

      {/* адаптирующийся контейнер */}
      <div className="bg-slate-400 container mb-4 max-h-10 bg-beige">
        container
      </div>

      {/* псевдоклассы, псевдоэлементы, анимация*/}
      <div className="bg-slate-50 mb-8 p-4">
        <div className="mb-8">
          <span className="cursor-pointer bg-blue-200 px-5 py-3 shadow-lg shadow-pink-600 transition-colors duration-300 ease-in-out hover:text-purple-700">
            logo
          </span>
        </div>

        <div>
          <input
            className="border-5 border-transparent h-10 w-1/4 rounded border-solid bg-blue-100 pl-6 text-xs shadow-none outline-none transition-colors duration-500 ease-linear hover:border-salmon focus:border-purple-700"
            placeholder="enter your name"
            type="text"
          />
        </div>
      </div>

      {/* адаптация */}
      <div>
        <button className="mr-16 hidden bg-beige p-4 sm:inline-block">
          адаптирующаяся кнопка
        </button>
        <button className="mr-16 bg-purple-700 p-4 hover:bg-green-800 sm:px-8 sm:py-3">
          адаптирующаяся кнопка
        </button>
      </div>
    </div>
  );
};
export default TailwindSample;
