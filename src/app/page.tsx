import { DeepChat } from "./DeepChat";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <DeepChat
          style={{ borderRadius: '10px', width: '80vw', height: '60vh' }}
          introMessage={{ text: 'Wie kann ich dir heute helfen?' }}
          textInput={{ placeholder: { text: 'Du darfst mich gerne etwas fragen...' } }}
          avatars={{ "ai": { src: "icon.png" } }}
          messageStyles={{ default: { shared: { bubble: { borderRadius: "4px" } }, user: { bubble: { backgroundColor: "rgb(119, 53, 206)" } } } }}
          connect={{ "url": "https://kpx1b8vzca.execute-api.eu-central-1.amazonaws.com/prod/assistant", "method": "POST" }}
          requestBodyLimits={{ "maxMessages": -1 }}>
        </DeepChat >
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.noxenum.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Noxenum
        </a>
      </footer>
    </div >
  );
}
