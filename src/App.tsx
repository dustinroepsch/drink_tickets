function Hole(props: { n: number }): JSX.Element {
  return (
    <div className="w-[10mm] h-[10mm] border-2 border-accent rounded-full m-1 border-dashed">
      <div className="flex flex-row justify-center items-center text-center w-full h-full ">
        <p className=" font-alex-brush text-2xl -rotate-90">{props.n}</p>
      </div>
    </div>
  );
}

function HolePunches(): JSX.Element {
  const numHoles = 3;
  return (
    <div className=" font-bold bg-primary h-full flex flex-col items-center border-l-2 border-accent">
      {Array.from(Array(numHoles).keys())
        .reverse()
        .map((n) => (
          <Hole n={n + 1} />
        ))}
    </div>
  );
}
function DrinkTicket(props: { name: string }): JSX.Element {
  return (
    <div className="w-[3in] h-[1.5in] border-2 border-accent flex justify-end items-center">
      <div className="flex flex-col grow h-full p-t-2">
        <p className=" font-alex-brush text-xl font-bold pt-2 pb-2 text-center border-b-2 w-full border-b-accent bg-slate-400">
          Cheers from Dustin and Valery
        </p>
        <div className="flex flex-col justify-center items-center h-full">
          <p className=" font-fira-sans text-center text-4xl">{props.name}</p>
        </div>
      </div>
      <HolePunches />
    </div>
  );
}

const names = ["Dustin Ryan-Roepsch", "Valery Smith"];

function App() {
  return (
    <>
      <div className="  bg-background text-text min-h-screen grid grid-flow-col auto-cols-max m-2 gap-2">
        {names.map((name) => (
          <DrinkTicket name={name} />
        ))}
      </div>
    </>
  );
}

export default App;
