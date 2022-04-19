import { AfterContentInit, AfterViewInit, Injectable } from '@angular/core';
import { Icon, LatLng, Marker, Popup, TileLayer, Tooltip } from "leaflet"
import { Place } from "./domain/place"
import { LeafletMap } from "./lib"
import { MapService } from "./map.service"
import { PlaceService } from "./ui/shared/api/place.service"

@Injectable({
  providedIn: 'root'
})
export class MapMarkerRendererService {
  private markers: Marker[] = new Array<Marker>();

  constructor(private mapService: MapService,
              private placeService: PlaceService) {
  }

  public renderMarkers(tags: string[]): void {
    const map = this.mapService.getLeafletMap()

    this.placeService.readAll().then((places: readonly Place[]) => {
      this.clearMarkers()
      for (let place of places) {
        if (!this.isContainAllTags(place.tags, tags)) continue
        const marker = this.createMarker(place)
        this.setMarkerPopup(marker, place.name)
        marker.addTo(map)
        marker.openPopup()
        this.markers.push(marker)
      }
    })
  }

  private createMarker(place: Place): Marker {
    const marker = new Marker(
      [ place.coordinates.latitude, place.coordinates.longitude ],
      {
        icon: new Icon({
          iconUrl: "/assets/place-marker.svg",
          iconSize: [ 32, 32 ]
        })
      }
    )
    
    marker.addEventListener("click", () => {
      // FIXME: Испускается два события
      console.log(place)
    })

    return marker
  }

  private setMarkerPopup(marker: Marker, popupContent: string): void {
    marker.bindPopup(popupContent, {
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      className: "place-marker-tooltip",
      offset: [ 0, -5 ]
    })
  }

  public clearMarkers(): void {
    for (let i = 0; i < this.markers.length; i++){
      this.markers[i].remove()
    }
    this.markers = new Array<Marker>()
  }

  private isContainAllTags(source: string[], tags: string[]): boolean {
    if (!tags) return true

    for (let item of tags) {
      if (!source.includes(item)) return false
    }
    return true
  }
}
