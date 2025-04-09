
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

// Add Window interface augmentation
declare global {
  interface Window {
    initMap?: () => void;
    google?: any;
  }
}

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define the initMap function that will be called as a callback
    window.initMap = () => {
      // Create map only if the ref is available
      if (mapRef.current && window.google) {
        const coordinates = { lat: 10.994167, lng: 76.93889 };
        const mapOptions: google.maps.MapOptions = {
          center: coordinates,
          zoom: 15,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],
        };

        // Create map
        const map = new google.maps.Map(mapRef.current, mapOptions);

        // Add marker
        const marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          title: "M. Adaikkalavan Property Valuation",
          animation: google.maps.Animation.DROP,
        });

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="color: #333; padding: 5px;">
              <h3 style="margin: 0; font-size: 16px;">M. Adaikkalavan Property Valuation</h3>
              <p style="margin: 5px 0;">201, Sri Vasavi Complex, Big Bazaar Street</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }
    };

    // Load Google Maps API
    if (!window.google) {
      // Create script element to load the API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCT_FS0An9L96Q_lyg-4usGDOsBvcI6eQU&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      // If Google Maps is already loaded, call initMap directly
      window.initMap();
    }

    // Cleanup function
    return () => {
      // Remove the global initMap function when component unmounts
      window.initMap = undefined;
    };
  }, []);

  return (
    <section id="location" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Office</h2>
          <div className="w-20 h-1 bg-lavender mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-lavender" /> 
              Office Location
            </h3>
            <p className="text-muted-foreground mb-6">
              201, Sri Vasavi Complex,<br />
              1248, Big Bazaar Street,<br />
              Coimbatore, Tamil Nadu - 641001
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-lavender" />
                <a href="tel:9361179820" className="hover:text-lavender">9361179820</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-lavender" />
                <a href="mailto:adaikkalavanvaluer@gmail.com" className="hover:text-lavender">
                  adaikkalavanvaluer@gmail.com
                </a>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=10.994167,76.93889" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 text-lavender hover:underline"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
          
          <div className="h-80 rounded-xl overflow-hidden glass-card">
            <div ref={mapRef} className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
