import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef } from "react";

const useScanner = (onSuccessHandler, onErrorHandler) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    if (!scannerRef.current) {
      // Initialize scanner only if it doesn't already exist
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          color: "red",
          width: 250,
          height: 250,
        },
        rememberLastUsedCamera: true,
        fps: 10,
        videoConstraints: {
          facingMode: { exact: "environment" },
        },
      });

      scanner.render(success, error);
      scannerRef.current = scanner; // Store the scanner instance in useRef
    }

    function success(result) {
      scannerRef.current.clear(); // Clear the scanner after a successful scan
      onSuccessHandler(result);
    }

    function error(error) {
      onErrorHandler();
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear(); // Clear the scanner on component unmount
      }
    };
  }, []);

  return null;
};

export default useScanner;
