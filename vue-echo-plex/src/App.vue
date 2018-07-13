<template>
<div>
  <echo-plex :signal="signal" @echoEmitted="logEvent($event)"></echo-plex>
  <button @click="setVal()">Change the Signal</button>
  <button @click="setInterval()">Change the delay Interval</button>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'app',
  data() {
    return {
      signal: 'app'
    }
  },
  methods: {
   setVal: function () {
     this.signal = 'Hello';
    },
    setInterval: function(){
      (this.$el.querySelector('echo-plex') as any).setDelayTime(200);
    },
    logEvent: function(event: any) {
     console.log(event);
    }
  }
});
</script>
