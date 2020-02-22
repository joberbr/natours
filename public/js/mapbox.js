export const displayMap = locations => {
    mapboxgl.accessToken =
        'pk.eyJ1Ijoiam9iZXJicm9lY2tsaW5nIiwiYSI6ImNrNnBqbjdpZDFrd3UzbG83cmx4aGFjdHQifQ.Rc_ez-_bfcwnpMuU90f-8w';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/joberbroeckling/ck6pjypkj0c741ipoz0qwr6u0',
        scrollZoom: false
        // center: [-118.113491, 34.111745],
        // zoom: 6,
        // interactive: false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        })
            .setLngLat(loc.coordinates)
            .addTo(map);

        // Add popup
        new mapboxgl.Popup({
            offset: 30,
            anchor: 'top'
        })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);

        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 200,
            left: 100,
            right: 100
        }
    });
};
