<template>
  <div class="marker">
    <!-- Step 2: Add webar-scene attribute to AFrame's <a-scene> tag -->
    <!-- Provide a valid Blippar license-key value in the key: property -->
    <a-scene
    webar-scene="key: e2a8ed9a-cf6c-4da2-9304-2bae85692c3a"
    vr-mode-ui="enabled: false"
    device-orientation-permission-ui="enabled: false"
    loading-screen="enabled: false"
    renderer="colorManagement: true;">

    <!-- Step 3: Add webar-camera attribute to AFrame's <a-entity camera> tag -->
    <a-camera webar-camera></a-camera>

    <a-assets timeout="60000">
    <a-asset-item id="testmodel1" src="models/MaterialsVariantsShoe.glb"></a-asset-item>
    </a-assets>

    <!-- Step 4: Add webar-marker attribute with a valid marker id value(obtained from Blippar hub), to AFrame's parent <a-entity> tag -->
    <!-- The models defined as a child element under this webar-marker id, will be displayed on the marker image during marker image tracking -->
    <a-entity webar-marker="id: 4a1694fb-f32f-41c7-a0e8-3d51a9f22b26">
    <!-- Step 5: Add AR models under the webar-marker nodes -->
    <!-- Add webar-loadmonitor attribute to the entities to display loading progress screen before starting the surface tracking -->
    <!-- Refer API:Attributes documentation for more details -->
    <a-entity gltf-model="#testmodel1" id="testmodel_1" rotation="90 0 0" position="0 0 0" scale="5 5 5" webar-loadmonitor="elType: glb"></a-entity>
    </a-entity>


    </a-scene>
  </div>
</template>


<script>
</script>
