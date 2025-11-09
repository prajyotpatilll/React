import React, { useRef, useEffect, useState } from "react";

const FreehandCanvas = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    ctxRef.current = ctx;
  }, []);

  const startDrawing = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    console.log(`🟢 Start drawing at: x=${x}, y=${y}`);

    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    console.log(`✏️ Drawing at: x=${x}, y=${y}`);

    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      console.log("🔴 Stopped drawing.");
      ctxRef.current.closePath();
      setIsDrawing(false);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      style={{ border: "1px solid #000", display: "block" }}
    />
  );
};

export default FreehandCanvas;
