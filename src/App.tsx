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
          <Hole n={n + 1} />
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
  "Mary Smith",
  "Jim	Smith",
  "Shannon	Smith",
  "Michael	Fredericks",
  "Spencer	Fredericks",
  "Hannah	Stewart",
  "Connor	Fredericks",
  "Marianne	Fredericks",
  "Vivian	Powell",
  "Tim	Powell",
  "Kathy	Cox",
  "Dan	Haskin",
  "Deborah	",
  "Bill	Smith",
  "Matt	Smith",
  "Ariel	Smith",
  "Megan	Freese",
  "Matt	Freese",
  "Angie	Smith-Harris",
  "Tom	Harris",
  "Kady	Harris-Lagodakis",
  "Angelos	Lagodakis",
  "Elle	Djebah",
  "Siri	Djebah",
  "Will	Harris",
  "Hallie	Sogin",
  "Mark	Smith",
  "Renee	Smith",
  "Kara	Goldfien",
  "Travis	Goldfien",
  "Aaron	Smith",
  "Amy	Lamb",
  "Drew	Smith",
  "Anne	Smith",
  "Alexander	Michel",
  "Asia	",
  "Susan	Hughes",
  "John	",
  "Joe	Smith",
  "Amber	Smith",
  "Millard	Smith",
  "Carol	Smith",
  "Jennifer	Fredericks",
  "Chandler	Arden",
  "Phil	Stracke",
  "Sara	Stracke",
  "Sam	Switzer",
  "Maddy	Switzer",
  "Rhonda	Wernimont",
  "Smokey	Weirnmont",
  "Emily	Adams",
  "Yuanze	Yu",
  "Christoper	Wiesbein",
  "Christoper's	Guest",
  "Lisa	Crowson",
  "Will	Crowson",
  "Joseph	Gamble",
  "Nick	Starr",
  "Steven	Williams",
  "Alek	Erickson",
  "Christopher	Caldwell",
  "Kassidy	Caldwell",
  "Amy	Loret",
  "Caleb	Davidson",
  "Tyler	Tran",
  "Valery	Smith",
  "Dustin	Ryan-Roepsch",
  "Cindy	Curler",
  "Michael	Curler",
  "Hope	Freund",
  "Charlie	Freund",
  "Paul	Haverland",
  "Kathy	Haverland",
  "Tom	Grothe",
  "Jordan	Garlow",
  "Cely	Gonzalez",
  "Jim	Leybourne",
  "Jacob	Locher",
  "Forrest	Garlow",
  "Chyla	Hall",
  "Ben	Ehlers",
  "Rob	Powell",
  "Jack	Zabinski",
  "Nate	Lehman",
  "Jacob	Berger",
  "Kris	Wolff",
  "Luke	Grice",
  "Kaizer	Gukeisen",
  "Shelby	Gukeisen",
  "Ryan	Larsen",
  "Tyler	Black",
  "Austin	Rohlfing",
  "Kynara	Fernandes",
  "Quinten	Herring",
  "Breanna	Herring",
  "Grant	Sanderson",
  "Kane	Esser",
  "Hillary	Goddard",
  "Martha	Ritter",
  "Wade	Hendrickson",
  "Steve	Sagerian",
  "Denise	Sagerian",
  "Jane	Trice",
  "Kate	Trice",
  "Frank	Montabon",
  "Michael	Shanahan",
];

function App() {
  return (
    <>
      <div className="  bg-background text-text min-h-screen flex flex-wrap m-2 gap-2">
        {names.map((name) => (
          <DrinkTicket name={name} />
        ))}
      </div>
    </>
  );
}

export default App;
