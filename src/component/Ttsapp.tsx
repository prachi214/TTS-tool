import { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { IconTopologyStar3 } from "@tabler/icons-react";
import FloatingInput from "./floatinginput";

const TtsApp = () => {
  const form = {
    text: "",
  };

  const [formData, setFormData] = useState(form);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    } else {
      loadVoices();
    }
  }, []);

  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVoice(e.target.value);
  };

  const speak = () => {
    if (!formData.text) return;

    const speech = new SpeechSynthesisUtterance(formData.text);

    if (selectedVoice) {
      const voice = voices.find((v) => v.name === selectedVoice);
      if (voice) speech.voice = voice;
    }

    speech.lang = "en-US";
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="px-16 mx-20 my-10 font-mono" id="App">
      <h1 className="text-4xl mb-5 font-bold text-center text-white">
        <span className="text-primaryColor">02. &nbsp;</span>Text to Speech
        Converter
      </h1>
      <div
        data-aos="flip-right"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
        className="w-[70%] !shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl"
      >
        <div className="text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
          Let's Start
          <IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" />
        </div>

        <FloatingInput
          id="text"
          name="Text"
          value={formData.text}
          handleChange={handleChange}
        />

        <div className="text-2xl flex gap-8 items-center justify-evenly text-white font-semibold sm-mx:text-xl xs-mx:text-sm">
          <select
            id="voiceSelect"
            name="voiceSelect"
            className="text-red-900 border border-white p-4 rounded-full !w-40 cursor-pointer !text-center center transition-transform duration-300ms ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#e7f52c] hover:!bg-pink-200"
            onChange={handleVoiceChange}
          >
            <option value="">Select Voice</option>
            {voices.map((voice, index) => (
              <option key={index} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>

          <Button
            fullWidth
            onClick={speak}
            variant="filled"
            size="md"
            radius="md"
            className="text-red-900 bg-stone-50 p-4 pr-4 border border-primaryColor rounded-full !w-40 cursor-pointer !text-center transition-transform duration-300ms ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#e7f52c] hover:!bg-pink-200"
          >
            Listen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TtsApp;
