const Audio = () => {
  const URL =
    "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";

  return <audio id="beep" src={URL}></audio>;
};

export default Audio;
