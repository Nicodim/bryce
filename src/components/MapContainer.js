import React, { useState } from 'react';

import { Map, Placemark, SearchControl, YMaps } from 'react-yandex-maps';

function MapContainer() {

    const [str, setStr] = useState("");
    const [coords, setCoords] = useState(null);

    const search = () => {
        fetch("https://geocode-maps.yandex.ru/1.x/?apikey=6dfcca32-ff97-4d07-9f48-2f3b011f430b&geocode=" + str + "&results=1&lang=en-US&format=json").then(result => {
            return result.json();
        }).then(json => {
            try {
                let coordsStr = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                const coordsParsed = coordsStr.split(" ").map(e => parseFloat(e));
                setCoords(coordsParsed);
            } catch (e) {
                console.log(e);
            }
        });
    }

    const getPlacemark = () => {
        if (coords) {
            return (<Placemark
                properties={{
                    hintContent: coords[1] + ", " + coords[0]
                }}
                geometry={[coords[1], coords[0]]}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            />);
        } else {
            return null;
        }
    }

    return (
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
            <div className="d-flex">
                <input class="form-control mr-sm-2" type="text" placeholder="Search"
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            search();
                        }
                    }}
                    value={str}
                    onChange={e => setStr(e.target.value)}
                />
                <button class="btn btn-success my-2 my-sm-0" type="submit" onClick={search}>Search</button>

            </div>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <YMaps
                    query={{
                        apikey: "6dfcca32-ff97-4d07-9f48-2f3b011f430b"
                    }}>
                    <Map width='640px' height="480px"
                        state={{ center: coords ? [coords[1], coords[0]] : [55.755814, 37.617635], zoom: 9 }}
                    >
                        {getPlacemark()}
                    </Map>
                </YMaps>
            </div>
            {coords && "Coordinates: " + coords.join(", ")}
        </div>
    );
}

export default MapContainer;
