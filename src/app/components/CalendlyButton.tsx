import { PopupWidget } from "react-calendly";
import { useState } from "react";

const CalendlyButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}>
        Book a Meeting
      </button>
      <PopupWidget
        url="https://calendly.com/adnixmedia-info/"
        rootElement={document.getElementById("__next")}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
        }}
      />
    </>
  );
};

export default CalendlyButton;
