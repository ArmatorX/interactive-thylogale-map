"use client";
import { useEffect, useRef, useState } from "react";
import Map from "./map";
import { MapLayer } from "./map-layer";

export default function MapWithButtons() {
  const divRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [layers, setLayers] = useState<MapLayer[]>([]);
  const [exclusiveLayer, setExclusiveLayer] = useState<MapLayer | null>(null);
  
  useEffect(() => {
    if (divRef.current) {
      const widthInPixels = divRef.current.offsetWidth;
      setScale(Math.round(2970 / widthInPixels * 500 / 100) * 100);
    }
  }, []);

  function onCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const layer = e.target.value as MapLayer;
    if (e.target.checked) {
      setLayers((prevLayers) => [...prevLayers, layer]);
    } else {
      setLayers((prevLayers) => prevLayers.filter((l) => l !== layer));
    }
  }

  function onExclusiveCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const layer = e.target.value as MapLayer;
    if (e.target.checked) {
      setExclusiveLayer(layer);
      setLayers((prevLayers) =>
        prevLayers.filter((l) => l !== "height" && l !== "biomes").concat(layer)
      );
    } else {
      setExclusiveLayer(null);
      setLayers((prevLayers) => prevLayers.filter((l) => l !== layer));
    }
  }

  return (
    <div className="flex flex-col text-white w-4/6" ref={divRef}>
      <div className="flex flex-row">
        <div className="flex flex-col w-[350px]">
          <h3 className="bold text-indigo-400 text-lg">Show layers:</h3>
          <div>
            <input type="checkbox" value="rivers" onChange={onCheckboxChange} />
            <label className="p-1">Rivers</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="countries"
              onChange={onCheckboxChange}
            />
            <label className="p-1">Countries</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="height"
              checked={exclusiveLayer === "height"}
              onChange={onExclusiveCheckboxChange}
            />
            <label className="p-1">Height</label>
          </div>
          <div>
            <input
              id="biomes-layer"
              type="checkbox"
              value="biomes"
              checked={exclusiveLayer === "biomes"}
              onChange={onExclusiveCheckboxChange}
            />
            <label className="p-1">Biomes</label>
          </div>
        </div>

        <Map showLayers={layers} />
      </div>

      <div className="flex flex-col mt-5 w-[100%] items-center justify-center">
        Each of the following segmets meassures: {scale} km
        <div className="flex">
          <div className="bg-white w-[2.5cm] h-1"></div>
          <div className="bg-blue-500 w-[2.5cm] h-1"></div>
          <div className="bg-white w-[2.5cm] h-1"></div>
          <div className="bg-blue-500 w-[2.5cm] h-1"></div>
        </div>
      </div>
    </div>
  );
}
