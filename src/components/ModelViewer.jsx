import '@google/model-viewer';

export default function ModelViewer() {
  return (
    <model-viewer
      src="/finalCup.glb"
      alt="3D Coffee Cup"
      auto-rotate
      camera-controls
      disable-zoom
      disable-tap
      environment-image="neutral"
      exposure="1.2"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
