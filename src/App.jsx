import Countdown from "./components/countdown/Countdown";

const App = () => {
  return (
    <div className="flex gap-1 md:gap-3 flex-col items-center justify-center w-full h-dvh bg-black">
      <h1 className="text-xl md:text-3xl font-bold underline text-white text-center">
        This website is under construction.
      </h1>
      <Countdown />
    </div>
  );
};

export default App;
