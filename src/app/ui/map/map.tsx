import Image from "next/image";
import { MapLayer } from "./map-layer";

interface MapProps {
  showLayers?: MapLayer[];
}

export default function Map(props: MapProps) {
  return (
    <div className="relative bg-[var(--ocean-default)]">
      <Image
        className="z-0"
        src="/thylogale/land.png"
        alt="Thylogale Land"
        width={2970}
        height={2100}
      />

      {/* Map Colors */}

      {props.showLayers?.includes("countries") &&
        !props.showLayers?.includes("biomes") &&
        !props.showLayers?.includes("height") && (
          <Image
            className="absolute top-0 left-0 z-10"
            src="/thylogale/country-colors.png"
            alt="Thylogale Countries Colored"
            width={2970}
            height={2100}
          />
        )}

      {props.showLayers?.includes("biomes") && (
        <Image
          className="absolute top-0 left-0 z-10"
          src="/thylogale/biomes.png"
          alt="Thylogale Biomes"
          width={2970}
          height={2100}
        />
      )}

      {props.showLayers?.includes("height") && (
        <Image
          className="absolute top-0 left-0 z-10"
          src="/thylogale/height.png"
          alt="Thylogale Height"
          width={2970}
          height={2100}
        />
      )}

      {props.showLayers?.includes("rivers") && (
        <Image
          className="absolute top-0 left-0 z-20"
          src="/thylogale/rivers.png"
          alt="Thylogale Rivers"
          width={2970}
          height={2100}
        />
      )}

      {/* Limits */}

      {props.showLayers?.includes("countries") && (
        <Image
          className="absolute top-0 left-0 z-30"
          src="/thylogale/country-limits.png"
          alt="Thylogale Countries"
          width={2970}
          height={2100}
        />
      )}

      <Image
        className="absolute top-0 left-0 z-[100]"
        src="/thylogale/land-limits.png"
        alt="Thylogale Borders"
        width={2970}
        height={2100}
      />

      {/* Labels */}

      {props.showLayers?.includes("countries") && (
        <Image
          className="absolute top-0 left-0 z-[200]"
          src="/thylogale/country-names.png"
          alt="Thylogale Countries Names"
          width={2970}
          height={2100}
        />
      )}
    </div>
  );
}
