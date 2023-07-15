import React, { useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

export function Setup2(props) {
  const { nodes, materials } = useGLTF("/models/compressed.glb");
  const texture = useVideoTexture("/textures/coding.mp4");

  return (
    <group
      {...props}
      dispose={null}
      scale={props.scale || 0.9}
      position={[0, 0, 0.1]}
    >
      <group position={[-0.437, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Part5Mtl.001"]}
          position={[0.941, -0.639, 0.414]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Part7Mtl.001"]}
          position={[0.942, -0.582, 0.132]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Part8Mtl.001"]}
          position={[0.423, -0.707, 0.601]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Material.026"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6003.geometry}
          material={materials["Material.027"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6005.geometry}
          material={materials["Material.029"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6006.geometry}
          material={materials["Material.030"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6007.geometry}
          material={materials["Material.107"]}
          position={[0.015, 0.025, 0]}
        />
        <mesh
          geometry={nodes.Object_6009.geometry}
          material={materials["Material.033"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6011.geometry}
          material={materials["Material.035"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6012.geometry}
          material={materials["Material.036"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6013.geometry}
          position={[0.41, -0.97, 0.902]}
          rotation={[3.14, 0.01, 3.21]}
          material={new MeshBasicMaterial({ map: texture })}
        />
        <mesh
          geometry={nodes.Object_6014.geometry}
          material={materials["Material.038"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6015.geometry}
          material={materials["Material.039"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6017.geometry}
          material={materials["Material.041"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6018.geometry}
          material={materials["Material.042"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6019.geometry}
          material={materials["Material.043"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Part4Mtl.001"]}
          position={[0.939, -0.712, 0.215]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
      </group>
      <group
        position={[0.168, 0.359, -0.064]}
        rotation={[-0.12, 0.051, -0.401]}
        scale={0.255}
      >
        <mesh
          geometry={nodes.Object_8001.geometry}
          material={materials["black_skin.008"]}
        />
        <mesh
          geometry={nodes.Object_9001.geometry}
          material={materials["outline.012"]}
        />
      </group>
      <group
        position={[0.033, 0.079, 0.051]}
        rotation={[0, -0.712, 0]}
        scale={[0.02, 0.02, 0.018]}
      >
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["black_plactic.015"]}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["outline.013"]}
        />
      </group>
      <group
        position={[0.039, 0.078, -0.005]}
        rotation={[0, 0.389, 0]}
        scale={[0.02, 0.02, 0.018]}
      >
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials["black_plactic.016"]}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials["outline.014"]}
        />
      </group>
      <group
        position={[-0.051, 0.078, 0]}
        rotation={[Math.PI, 0.328, 0]}
        scale={[-0.02, -0.02, -0.018]}
      >
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials["black_plactic.017"]}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["outline.015"]}
        />
      </group>
      <group
        position={[-0.006, 0.078, -0.036]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[-0.02, -0.02, -0.018]}
      >
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials["black_plactic.018"]}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials["outline.016"]}
        />
      </group>
      <group
        position={[-0.04, 0.078, 0.054]}
        rotation={[Math.PI, -0.882, Math.PI]}
        scale={[0.02, 0.02, 0.018]}
      >
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials["black_plactic.019"]}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials["outline.017"]}
        />
      </group>
      <group position={[0, 0.526, 0.045]} scale={[0.154, 0.202, 0.255]}>
        <mesh
          geometry={nodes.Object_5001.geometry}
          material={materials["black_skin.010"]}
        />
        <mesh
          geometry={nodes.Object_6001.geometry}
          material={materials["outline.018"]}
        />
      </group>
      <group position={[0.245, 0.34, 0.148]} scale={[0.012, 0.006, 0.017]}>
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials["black_skin.011"]}
        />
        <mesh
          geometry={nodes.Object_45.geometry}
          material={materials["metal.001"]}
        />
      </group>
      <group position={[0.245, 0.584, 0.166]} scale={[0.169, 0.255, 0.266]}>
        <mesh
          geometry={nodes.Object_58.geometry}
          material={materials["black_skin.013"]}
        />
        <mesh
          geometry={nodes.Object_59.geometry}
          material={materials["outline.019"]}
        />
      </group>
      <group
        position={[-0.006, 0.774, -0.178]}
        rotation={[1.605, 0, 0]}
        scale={[0.132, 0.143, 0.096]}
      >
        <mesh
          geometry={nodes.Object_51.geometry}
          material={materials["black_skin.015"]}
        />
        <mesh
          geometry={nodes.Object_52.geometry}
          material={materials["outline.022"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials["black_skin.009"]}
        position={[-0.008, 0.571, -0.129]}
        rotation={[-0.208, 0, 0]}
        scale={[0.119, 0.115, 0.093]}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials["black_plactic.020"]}
        position={[-0.005, 0.077, 0.016]}
        rotation={[0, -0.343, 0]}
        scale={[0.061, 0.034, 0.061]}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials["black_plactic.021"]}
        position={[-0.131, 0.291, 0.074]}
        rotation={[Math.PI, -0.452, Math.PI]}
        scale={[0.36, 0.412, 0.36]}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials["black_plactic.022"]}
        position={[-0.191, 0.016, 0.238]}
        rotation={[Math.PI / 2, 0, -0.876]}
        scale={0.283}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials["black_plactic.023"]}
        position={[0.214, 0.018, 0.206]}
        rotation={[-Math.PI / 2, 0, -0.73]}
        scale={-0.283}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials["black_plactic.024"]}
        position={[0.265, 0.016, -0.098]}
        rotation={[-Math.PI / 2, 0, 0.435]}
        scale={-0.283}
      />
      <mesh
        geometry={nodes.Object_40.geometry}
        material={materials["black_plactic.025"]}
        position={[-0.006, 0.016, -0.276]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={-0.283}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials["black_plactic.026"]}
        position={[-0.275, 0.016, -0.077]}
        rotation={[Math.PI / 2, 0, 0.315]}
        scale={0.283}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials["black_plactic.027"]}
        position={[-0.004, 0.141, 0.015]}
        scale={0.028}
      />
      <mesh
        geometry={nodes.Object_49.geometry}
        material={materials["black_plactic.028"]}
        position={[-0.004, 0.313, 0.117]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.637, 1.063, 1.063]}
      />
      <mesh
        geometry={nodes.Object_47.geometry}
        material={materials["black_plactic.029"]}
        position={[-0.004, 0.275, 0.178]}
        rotation={[3.129, 0, Math.PI]}
        scale={[1.063, 0.907, 1.004]}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials["black_skin.012"]}
        position={[0.06, 0.922, -0.221]}
        rotation={[1.525, 0, 0]}
        scale={[0.038, 0.034, 0.038]}
      />
      <mesh
        geometry={nodes.Object_56.geometry}
        material={materials["Material.044"]}
        position={[-0.005, 0.883, -0.189]}
        rotation={[1.381, 0, 0]}
        scale={[0.118, 0.087, 0.079]}
      />
      <mesh
        geometry={nodes.Object_61.geometry}
        material={materials["Material.045"]}
        position={[0.191, 0.356, -0.113]}
        rotation={[-0.123, 0.177, -1.528]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_63.geometry}
        material={materials["Material.046"]}
        position={[0.187, 0.356, -0.113]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_65.geometry}
        material={materials["Material.047"]}
        position={[0.187, 0.356, -0.113]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_67.geometry}
        material={materials["Material.048"]}
        position={[0.196, 0.356, -0.114]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_69.geometry}
        material={materials["Material.049"]}
        position={[-0.19, 0.525, -0.13]}
        rotation={[-0.126, 0.075, -1.481]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_71.geometry}
        material={materials["Material.050"]}
        position={[0.196, 0.356, -0.114]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_73.geometry}
        material={materials["outline.020"]}
        position={[0.07, 0.585, -0.074]}
        rotation={[1.293, 0, 0]}
        scale={[0.019, 0.079, 0.079]}
      />
      <mesh
        geometry={nodes.Object_75.geometry}
        material={materials["black_skin.014"]}
        position={[-0.005, 0.885, -0.24]}
        rotation={[1.502, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Object_77.geometry}
        material={materials["outline.021"]}
        position={[-0.005, 0.883, -0.189]}
        rotation={[1.381, 0, 0]}
        scale={[0.118, 0.087, 0.08]}
      />
      <mesh
        geometry={nodes.Object_79.geometry}
        material={materials["outline.023"]}
        position={[-0.051, 1.041, -0.205]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.038}
      />
      <group position={[-0.437, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2001.geometry}
          material={materials["Part5Mtl.003"]}
          position={[0.941, -0.639, 0.414]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
        <mesh
          geometry={nodes.Object_3001.geometry}
          material={materials["Part7Mtl.003"]}
          position={[0.942, -0.582, 0.132]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
        <mesh
          geometry={nodes.Object_5003.geometry}
          material={materials["Union1Mtl.003"]}
          position={[0.415, -0.94, 0.672]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
        <mesh
          geometry={nodes.Object_6020.geometry}
          material={materials["Material.051"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6021.geometry}
          material={materials["Material.052"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6023.geometry}
          material={materials["Material.054"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6024.geometry}
          material={materials["Material.055"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6027.geometry}
          material={materials["Material.058"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6029.geometry}
          material={materials["Material.060"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6030.geometry}
          material={materials["Material.061"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6032.geometry}
          material={materials["Material.063"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6033.geometry}
          material={materials["Material.064"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6035.geometry}
          material={materials["Material.066"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6036.geometry}
          material={materials["Material.067"]}
          position={[0.42, -0.8, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_6037.geometry}
          material={materials["Material.068"]}
          position={[0.401, -0.762, 0.902]}
          rotation={[0, 0, 3.121]}
        />
        <mesh
          geometry={nodes.Object_7002.geometry}
          material={materials["Part4Mtl.003"]}
          position={[0.939, -0.712, 0.215]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
        <mesh
          geometry={nodes.Object_8002.geometry}
          material={materials["Union2Mtl.003"]}
          position={[0.519, -0.717, 0.519]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
        <mesh
          geometry={nodes.Object_9003.geometry}
          material={materials["Union5Mtl.003"]}
          position={[0.417, -0.788, 0.905]}
          rotation={[0, 0, 3.121]}
          scale={0.094}
        />
      </group>
      <group
        position={[0.168, 0.359, -0.064]}
        rotation={[-0.12, 0.051, -0.401]}
        scale={0.255}
      >
        <mesh
          geometry={nodes.Object_8003.geometry}
          material={materials["black_skin.016"]}
        />
        <mesh
          geometry={nodes.Object_9004.geometry}
          material={materials["outline.024"]}
        />
      </group>
      <group
        position={[0.033, 0.079, 0.051]}
        rotation={[0, -0.712, 0]}
        scale={[0.02, 0.02, 0.018]}
      >
        <mesh
          geometry={nodes.Object_13001.geometry}
          material={materials["black_plactic.030"]}
        />
        <mesh
          geometry={nodes.Object_14002.geometry}
          material={materials["outline.025"]}
        />
      </group>
      <group
        position={[0.039, 0.078, -0.005]}
        rotation={[0, 0.389, 0]}
        scale={[0.02, 0.02, 0.018]}
      >
        <mesh
          geometry={nodes.Object_16002.geometry}
          material={materials["black_plactic.031"]}
        />
        <mesh
          geometry={nodes.Object_17002.geometry}
          material={materials["outline.026"]}
        />
      </group>
      <group
        position={[-0.051, 0.078, 0]}
        rotation={[Math.PI, 0.328, 0]}
        scale={[-0.02, -0.02, -0.018]}
      >
        <mesh
          geometry={nodes.Object_19001.geometry}
          material={materials["black_plactic.032"]}
        />
        <mesh
          geometry={nodes.Object_20002.geometry}
          material={materials["outline.027"]}
        />
      </group>
      <group
        position={[-0.006, 0.078, -0.036]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[-0.02, -0.02, -0.018]}
      >
        <mesh
          geometry={nodes.Object_22002.geometry}
          material={materials["black_plactic.033"]}
        />
        <mesh
          geometry={nodes.Object_23001.geometry}
          material={materials["outline.028"]}
        />
      </group>
      <group
        position={[-0.04, 0.078, 0.054]}
        rotation={[Math.PI, -0.882, Math.PI]}
        scale={[0.02, 0.02, 0.018]}
      >
        <mesh
          geometry={nodes.Object_25001.geometry}
          material={materials["black_plactic.034"]}
        />
        <mesh
          geometry={nodes.Object_26001.geometry}
          material={materials["outline.029"]}
        />
      </group>
      <group position={[0, 0.526, 0.045]} scale={[0.154, 0.202, 0.255]}>
        <mesh
          geometry={nodes.Object_5004.geometry}
          material={materials["black_skin.018"]}
        />
        <mesh
          geometry={nodes.Object_6038.geometry}
          material={materials["outline.030"]}
        />
      </group>
      <group position={[0.245, 0.34, 0.148]} scale={[0.012, 0.006, 0.017]}>
        <mesh
          geometry={nodes.Object_44001.geometry}
          material={materials["black_skin.019"]}
        />
        <mesh
          geometry={nodes.Object_45001.geometry}
          material={materials["metal.002"]}
        />
      </group>
      <group position={[0.245, 0.584, 0.166]} scale={[0.169, 0.255, 0.266]}>
        <mesh
          geometry={nodes.Object_58001.geometry}
          material={materials["black_skin.021"]}
        />
        <mesh
          geometry={nodes.Object_59001.geometry}
          material={materials["outline.031"]}
        />
      </group>
      <group
        position={[-0.006, 0.774, -0.178]}
        rotation={[1.605, 0, 0]}
        scale={[0.132, 0.143, 0.096]}
      >
        <mesh
          geometry={nodes.Object_51001.geometry}
          material={materials["black_skin.023"]}
        />
        <mesh
          geometry={nodes.Object_52001.geometry}
          material={materials["outline.034"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_11001.geometry}
        material={materials["black_skin.017"]}
        position={[-0.008, 0.571, -0.129]}
        rotation={[-0.208, 0, 0]}
        scale={[0.119, 0.115, 0.093]}
      />
      <mesh
        geometry={nodes.Object_28001.geometry}
        material={materials["black_plactic.035"]}
        position={[-0.005, 0.077, 0.016]}
        rotation={[0, -0.343, 0]}
        scale={[0.061, 0.034, 0.061]}
      />
      <mesh
        geometry={nodes.Object_30001.geometry}
        material={materials["black_plactic.036"]}
        position={[-0.131, 0.291, 0.074]}
        rotation={[Math.PI, -0.452, Math.PI]}
        scale={[0.36, 0.412, 0.36]}
      />
      <mesh
        geometry={nodes.Object_34001.geometry}
        material={materials["black_plactic.037"]}
        position={[-0.191, 0.016, 0.238]}
        rotation={[Math.PI / 2, 0, -0.876]}
        scale={0.283}
      />
      <mesh
        geometry={nodes.Object_36001.geometry}
        material={materials["black_plactic.038"]}
        position={[0.214, 0.018, 0.206]}
        rotation={[-Math.PI / 2, 0, -0.73]}
        scale={-0.283}
      />
      <mesh
        geometry={nodes.Object_38001.geometry}
        material={materials["black_plactic.039"]}
        position={[0.265, 0.016, -0.098]}
        rotation={[-Math.PI / 2, 0, 0.435]}
        scale={-0.283}
      />
      <mesh
        geometry={nodes.Object_40001.geometry}
        material={materials["black_plactic.040"]}
        position={[-0.006, 0.016, -0.276]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={-0.283}
      />
      <mesh
        geometry={nodes.Object_42001.geometry}
        material={materials["black_plactic.041"]}
        position={[-0.275, 0.016, -0.077]}
        rotation={[Math.PI / 2, 0, 0.315]}
        scale={0.283}
      />
      <mesh
        geometry={nodes.Object_32001.geometry}
        material={materials["black_plactic.042"]}
        position={[-0.004, 0.141, 0.015]}
        scale={0.028}
      />
      <mesh
        geometry={nodes.Object_49001.geometry}
        material={materials["black_plactic.043"]}
        position={[-0.004, 0.313, 0.117]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.637, 1.063, 1.063]}
      />
      <mesh
        geometry={nodes.Object_47001.geometry}
        material={materials["black_plactic.044"]}
        position={[-0.004, 0.275, 0.178]}
        rotation={[3.129, 0, Math.PI]}
        scale={[1.063, 0.907, 1.004]}
      />
      <mesh
        geometry={nodes.Object_54001.geometry}
        material={materials["black_skin.020"]}
        position={[0.06, 0.922, -0.221]}
        rotation={[1.525, 0, 0]}
        scale={[0.038, 0.034, 0.038]}
      />
      <mesh
        geometry={nodes.Object_56001.geometry}
        material={materials["Material.069"]}
        position={[-0.005, 0.883, -0.189]}
        rotation={[1.381, 0, 0]}
        scale={[0.118, 0.087, 0.079]}
      />
      <mesh
        geometry={nodes.Object_61001.geometry}
        material={materials["Material.070"]}
        position={[0.191, 0.356, -0.113]}
        rotation={[-0.123, 0.177, -1.528]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_63001.geometry}
        material={materials["Material.071"]}
        position={[0.187, 0.356, -0.113]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_65001.geometry}
        material={materials["Material.072"]}
        position={[0.187, 0.356, -0.113]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_67001.geometry}
        material={materials["Material.073"]}
        position={[0.196, 0.356, -0.114]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_69001.geometry}
        material={materials["Material.074"]}
        position={[-0.19, 0.525, -0.13]}
        rotation={[-0.126, 0.075, -1.481]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_71001.geometry}
        material={materials["Material.075"]}
        position={[0.196, 0.356, -0.114]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        geometry={nodes.Object_73001.geometry}
        material={materials["outline.032"]}
        position={[0.07, 0.585, -0.074]}
        rotation={[1.293, 0, 0]}
        scale={[0.019, 0.079, 0.079]}
      />
      <mesh
        geometry={nodes.Object_75001.geometry}
        material={materials["black_skin.022"]}
        position={[-0.005, 0.885, -0.24]}
        rotation={[1.502, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Object_77001.geometry}
        material={materials["outline.033"]}
        position={[-0.005, 0.883, -0.189]}
        rotation={[1.381, 0, 0]}
        scale={[0.118, 0.087, 0.08]}
      />
      <mesh
        geometry={nodes.Object_79001.geometry}
        material={materials["outline.035"]}
        position={[-0.051, 1.041, -0.205]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.038}
      />
      <group position={[0, -0.129, 0.55]} rotation={[-Math.PI / 2, 0, 3.085]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.139, 0.759, -0.046]}
            rotation={[1.574, 0, Math.PI / 2]}
            scale={0.001}
          >
            <group position={[10.09, 176.882, -0.036]}>
              <mesh
                geometry={nodes.Mesh_69002.geometry}
                material={materials["Keyboard_body_3DShaker.013"]}
              />
              <mesh
                geometry={nodes.Mesh_69002_1.geometry}
                material={materials["Keys_3DShaker.001"]}
              />
            </group>
          </group>
          <group position={[0.223, 0.753, -0.01]} scale={0.001}>
            <group position={[-1.398, 0, -25.495]}>
              <mesh
                geometry={nodes.Mesh_73002.geometry}
                material={materials["Mouse_body_lower_3DShaker..004"]}
              />
              <mesh
                geometry={nodes.Mesh_73002_1.geometry}
                material={materials["Mouse_sliders_3DShaker.002"]}
              />
              <mesh
                geometry={nodes.Mesh_73002_2.geometry}
                material={materials["Mouse_Body_3DShaker.001"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/compressed.glb");
useGLTF.preload("/textures/coding.mp4");