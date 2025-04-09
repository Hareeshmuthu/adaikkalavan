
/// <reference types="vite/client" />

// Google Maps API type declarations
interface Window {
  google: typeof google;
  initMap: () => void;
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element, options?: MapOptions);
    }
    
    class Marker {
      constructor(opts?: MarkerOptions);
      setMap(map: Map | null): void;
      addListener(eventName: string, handler: Function): void;
    }
    
    class InfoWindow {
      constructor(opts?: InfoWindowOptions);
      open(map?: Map, anchor?: Marker): void;
    }
    
    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      styles?: Array<MapTypeStyle>;
    }
    
    interface LatLng {
      lat(): number;
      lng(): number;
    }
    
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
    
    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      title?: string;
      animation?: Animation;
    }
    
    interface InfoWindowOptions {
      content?: string | Node;
    }
    
    interface MapTypeStyle {
      elementType?: string;
      featureType?: string;
      stylers: Array<any>;
    }
    
    enum Animation {
      DROP,
      BOUNCE
    }
  }
}
