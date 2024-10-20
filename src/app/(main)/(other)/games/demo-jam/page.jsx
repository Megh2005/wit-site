import React from "react";

const GameTwo = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-3xl capitalize sm:text-4xl px-12 font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
        Demo Jam 
        <span>Will Start On 17:00</span>
        <hr/>
        You have to use your cellular data to participate in demo jam
      </h1>

      {/* <div
        className="strawpoll-embed w-full h-[60vh] sm:h-[70vh] max-w-xs sm:max-w-lg flex flex-col"
        id="strawpoll_7rnzVxjwlnO"
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <iframe
          title="StrawPoll Embed"
          id="strawpoll_iframe_7rnzVxjwlnO"
          src="https://strawpoll.com/embed/7rnzVxjwlnO"
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
        <script async src="https://cdn.strawpoll.com/dist/widgets.js"></script>
      </div> */}
    </div>
  );
};

export default GameTwo;
