import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from 'react';

/**
 * A component that renders a 3D model of a target stand.
 * 
 * @param {Object} props - The props passed to the component.
 * @param {Object} props.ref - A reference to the component.
 * @param {Object} props.children - The children of the component.
 * @returns {JSX.Element} A JSX element representing the component.
 */
const Target = (props) => {
  /**
   * A reference to the component.
   * this is just in case we want to play with the scene
   */
  const targetRef = useRef();

  /**
   * Loads the 3D model of the target stand using the useGLTF hook from @react-three/drei.
   * The model is stored in the Supabase storage bucket.
   * 
   * @param {string} url - The URL of the model.
   * @returns {Object} An object containing the scene, nodes, materials, and animations of the model.
   */
  const { scene } = useGLTF('/models/desk.glb');

  /**
   * Animates the target stand using the useGSAP hook from @gsap/react.
   * The animation moves the target stand up and down.
   */
  useGSAP(() => {
    /**
     * Animates the target stand's position.
     * The animation moves the target stand 0.5 units up and down.
     * The animation repeats indefinitely and bounces back and forth.
     */
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  // Hide any overly large circular/disc mesh that may be part of the model.
  // This addresses an unwanted large disk appearing on top of the scene.
  useEffect(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if (!child.isMesh) return;

      const name = child.name || '';
      // Hide meshes named like 'disk', 'circle', 'disc' explicitly.
      if (/disk|circle|disc/i.test(name)) {
        child.visible = false;
        return;
      }

      // Otherwise, hide meshes that are unusually large (heuristic).
      try {
        if (child.geometry && !child.geometry.boundingSphere) child.geometry.computeBoundingSphere();
        const r = child.geometry?.boundingSphere?.radius;
        if (r && r > 1.2) child.visible = false;
      } catch (e) {
        // ignore geometry errors
      }
    });
  }, [scene]);

  /**
   * Returns a JSX element representing the component.
   * The element is a mesh that renders the target stand model.
   * The mes contains a primitive
   * The PRIMItive act as both the geometry and tyhe material
   * The element has a reference to the component and a rotation of 0, Math.PI / 5, 0.
   * The element has a scale of 1.5.
   */
  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;