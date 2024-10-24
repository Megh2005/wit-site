import React from "react";

const GameTwo = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-3xl capitalize sm:text-4xl px-12 font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
        Demo Jam
        <span>Will Start On 17:15</span>
        <hr />
        You have to use your cellular data to participate in demo jam
      </h1>

      {/* <div
        className="strawpoll-embed w-full h-[60vh] sm:h-[70vh] max-w-xs sm:max-w-lg flex flex-col"
        id="strawpoll_7MZ0kovwmgo"
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <iframe
          title="StrawPoll Embed"
          id="strawpoll_iframe_7MZ0kovwmgo"
          src="https://strawpoll.com/embed/7MZ0kovwmgo"
          className="w-full h-full border-none"
          style={{
            position: "static",
            visibility: "visible",
            display: "block",
            width: "100%",
            flexGrow: 1,
          }}
          allowFullScreen
          allowTransparency
        >
          Loading...
        </iframe>
        <script
          async
          src="https://cdn.strawpoll.com/dist/widgets.js"
          charSet="utf-8"
        ></script>
      </div> */}
    </div>
  );
};

export default GameTwo;
