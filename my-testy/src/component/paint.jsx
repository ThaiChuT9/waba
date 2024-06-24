import React, { useRef, useState, useEffect } from "react";
import "./paint.css";

const Paint = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState("black");
  const randomColors = ["#FF5733", "#33FF57", "#3357FF"];

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineJoin = "round";
  }, []);

  const startDrawing = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.lineWidth = brushSize;
    context.strokeStyle = brushColor;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };
  return (
    <div>
      <div className="toolbar">
        <div className="toolbar-section">
          <div className="toolbar-section-title">Brush</div>
          <div className="toolbar-items">
            <div onClick={() => setBrushSize(5)} className="brush-size">
              <div
                className="brush-size-inner"
                style={{ width: "5px", height: "5px" }}
              ></div>
            </div>
            <div onClick={() => setBrushSize(10)} className="brush-size">
              <div
                className="brush-size-inner"
                style={{ width: "10px", height: "10px" }}
              ></div>
            </div>
            <div onClick={() => setBrushSize(15)} className="brush-size">
              <div
                className="brush-size-inner"
                style={{ width: "15px", height: "15px" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="toolbar-section">
          <div className="toolbar-section-title">Color</div>
          <div className="toolbar-items">
            {randomColors.map((color) => (
              <div
                key={color}
                className="color-square"
                style={{ backgroundColor: color }}
                onClick={() => setBrushColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="toolbar-section">
          <div className="toolbar-section-title" style={{color:'white'}}>Actions</div>
          <div className="toolbar-items">
            <button className="erase-all" onClick={clearCanvas}>Erase All</button>
          </div>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
};

export default Paint;
