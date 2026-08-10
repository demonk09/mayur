'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
function Core(){const ref=useRef<THREE.Mesh>(null);useFrame((_,d)=>{if(ref.current){ref.current.rotation.x+=d*.18;ref.current.rotation.y+=d*.3}});return <Float speed={1.4} rotationIntensity={.5} floatIntensity={1}><mesh ref={ref}><icosahedronGeometry args={[1.35,5]}/><MeshDistortMaterial color="#d9ff4a" roughness={.25} metalness={.65} distort={.28} speed={1.8}/></mesh></Float>}
export default function Scene(){return <div className="scene"><Canvas camera={{position:[0,0,4.2],fov:42}} dpr={[1,1.5]}><ambientLight intensity={1.2}/><pointLight position={[3,3,4]} intensity={25}/><Core/><Sparkles count={90} scale={5} size={2} speed={.25}/></Canvas></div>}