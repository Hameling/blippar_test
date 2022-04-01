<template>
  <div class="basic">
    <a-scene
    webar-scene="key: e2a8ed9a-cf6c-4da2-9304-2bae85692c3a"
    vr-mode-ui="enabled: false"
    device-orientation-permission-ui="enabled: false"
    loading-screen="enabled: false">

    <a-camera webar-camera></a-camera>
    <a-assets>    
      <a-asset-item
        id="astronaut"
        src="models/astronaut.glb">
      </a-asset-item>
    </a-assets>

    <a-entity webar-stage>
      <!-- Place 3D AR models here -->
      <a-entity gltf-model="#astronaut" id="astronaut_1" 
                rotation="0 0 0" position="0 0 0" scale="0.25 0.25 0.25"
                webar-loadmonitor="elType: glb"></a-entity>
    </a-entity>


    </a-scene>
  </div>
</template>

<script>

</script>
