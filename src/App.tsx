import cornerImgUrl from "./assets/corner.png";

function Hole(props: { n: number }): JSX.Element {
  return (
    <div className="w-[10mm] h-[10mm] border-2 border-accent rounded-full m-1 border-dashed">
      <div className="flex flex-row justify-center items-center text-center w-full h-full text-[gold]">
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
          <Hole key={n} n={n + 1} />
        ))}
    </div>
  );
}

function DrinkTicket(props: { name: string }): JSX.Element {
  return (
    <div className="w-[3in] h-[1.5in] border-2 border-accent flex justify-end items-center break-inside-avoid">
      <div className="flex flex-col grow h-full p-t-2">
        <p className=" font-alex-brush text-xl font-bold pt-2 pb-2 text-center border-b-2 w-full border-b-accent bg-slate-400">
          Cheers from Dustin and Valery
        </p>
        <div className="flex flex-col justify-center items-center h-full relative">
          <img
            src={cornerImgUrl}
            className="absolute bottom-0 left-0 aspect-square h-[.4in]"
          />
          <img
            src={cornerImgUrl}
            className="absolute top-0 left-0 aspect-square h-[.4in] rotate-90"
          />
          <img
            src={cornerImgUrl}
            className="absolute top-0 right-0 aspect-square h-[.4in] rotate-180"
          />
          <img
            src={cornerImgUrl}
            className="absolute bottom-0 right-0 aspect-square h-[.4in] -rotate-90"
          />
          <p className=" font-im-fell text-center text-4xl z-50">
            {props.name}
          </p>
        </div>
      </div>
      <HolePunches />
    </div>
  );
}

const names = [
  "Aaron	Smith",
  "Alek	Erickson",
  "Alexander	Michel",
  "Amber	Smith",
  "Amy	Lamb",
  "Amy	Loret",
  "Angelos	Lagodakis",
  "Angie	Smith-Harris",
  "Anne	Smith",
  "Ariel	Smith",
  "Asia	",
  "Austin	Rohlfing",
  "Ben	Ehlers",
  "Bill	Smith",
  "Breanna	Herring",
  "Caleb	Davidson",
  "Carol	Smith",
  "Cely	Gonzalez",
  "Chandler	Arden",
  "Charlie	Freund",
  "Christoper	Wiesbein",
  "Christoper's	Guest",
  "Christopher	Caldwell",
  "Chyla	Hall",
  "Cindy	Curler",
  "Connor	Fredericks",
  "Dan	Haskin",
  "Deborah	",
  "Denise	Sagerian",
  "Drew	Smith",
  "Dustin	Ryan-Roepsch",
  "Elle	Djebah",
  "Emily	Adams",
  "Forrest	Garlow",
  "Frank	Montabon",
  "Grant	Sanderson",
  "Hallie	Sogin",
  "Hannah	Stewart",
  "Hillary	Goddard",
  "Hope	Freund",
  "Jack	Zabinski",
  "Jacob	Berger",
  "Jacob	Locher",
  "Jane	Trice",
  "Jennifer	Fredericks",
  "Jim	Leybourne",
  "Jim	Smith",
  "Joe	Smith",
  "John	",
  "Jordan	Garlow",
  "Joseph	Gamble",
  "Kady	Harris-Lagodakis",
  "Kaizer	Gukeisen",
  "Kane	Esser",
  "Kara	Goldfien",
  "Kassidy	Caldwell",
  "Kate	Trice",
  "Kathy	Cox",
  "Kathy	Haverland",
  "Kris	Wolff",
  "Kynara	Fernandes",
  "Lisa	Crowson",
  "Luke	Grice",
  "Maddy	Switzer",
  "Marianne	Fredericks",
  "Mark	Smith",
  "Martha	Ritter",
  "Mary Smith",
  "Matt	Freese",
  "Matt	Smith",
  "Megan	Freese",
  "Michael	Curler",
  "Michael	Fredericks",
  "Michael	Shanahan",
  "Millard	Smith",
  "Nate	Lehman",
  "Nick	Starr",
  "Paul	Haverland",
  "Phil	Stracke",
  "Quinten	Herring",
  "Renee	Smith",
  "Rhonda	Wernimont",
  "Rob	Powell",
  "Ryan	Larsen",
  "Sam	Switzer",
  "Sara	Stracke",
  "Shannon	Smith",
  "Shelby	Gukeisen",
  "Siri	Djebah",
  "Smokey	Weirnmont",
  "Spencer	Fredericks",
  "Steve	Sagerian",
  "Steven	Williams",
  "Susan	Hughes",
  "Tim	Powell",
  "Tom	Grothe",
  "Tom	Harris",
  "Travis	Goldfien",
  "Tyler	Black",
  "Tyler	Tran",
  "Valery	Smith",
  "Vivian	Powell",
  "Wade	Hendrickson",
  "Will	Crowson",
  "Will	Harris",
  "Yuanze	Yu",
  "Guest",
  "Guest",
  "Guest",
  "Guest",
  "Guest",
  "Guest",
];

function App() {
  return (
    <>
      <div className="  bg-background text-text min-h-screen flex flex-wrap m-2 gap-2">
        {names.map((name, idx) => (
          <DrinkTicket key={idx} name={name} />
        ))}
      </div>
    </>
  );
}

export default App;
