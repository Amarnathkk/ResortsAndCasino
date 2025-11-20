import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ResortMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSubmitted, setTokenSubmitted] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !tokenSubmitted || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-115.1728, 36.1147], // Las Vegas coordinates
      zoom: 15,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker for resort
    new mapboxgl.Marker({ color: '#f20089' })
      .setLngLat([-115.1728, 36.1147])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          '<h3 style="color: #f20089; font-weight: bold;">SFW Resort & Casino</h3><p>The Strip, Las Vegas</p>'
        )
      )
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [tokenSubmitted, mapboxToken]);

  if (!tokenSubmitted) {
    return (
      <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
        <h3 className="text-2xl font-bold mb-4">Resort Location Map</h3>
        <p className="text-muted-foreground mb-6">
          Enter your Mapbox token to view our interactive resort map. Get your free token at{' '}
          <a
            href="https://mapbox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            mapbox.com
          </a>
        </p>
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Enter Mapbox Public Token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={() => setTokenSubmitted(true)}
            disabled={!mapboxToken}
            className="bg-primary hover:bg-primary/90"
          >
            Load Map
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default ResortMap;
