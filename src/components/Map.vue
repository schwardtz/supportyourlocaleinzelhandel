<template>
  <div class="map">
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="location in locations" :key="location.name" :lat-lng="location.geolocation">
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="./../assets/icons/icons8-marker-40.png"
        ></l-icon>
        <l-popup>
          <LocationContent :data="location" />
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
const LocationContent = () => import("./LocationContent.vue");

import { LMap, LTileLayer, LPopup, LIcon } from "vue2-leaflet";
export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LPopup,
    LIcon,
    LocationContent
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    locations() {
      return this.$store.getters.getFilteredLocations;
    },
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 5,
      //Center of Germany
      center: [50.627542, 9.95845],
      bounds: null,
      iconSize: 30
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

<style scoped>
.map {
  height: 60vh;
  min-height: 500px;
  width: 100%;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.leaflet-marker-icon {
  height: 30px!important;
}
</style>
