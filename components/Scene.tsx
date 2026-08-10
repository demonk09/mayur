'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
function Core(){const ref=useRef<THREE.Mesh>(null);useFrame((_,d)=>{if(ref.current){ref.current.rotation.x+=d*.12;ref.current.rotation.y+=d*.22}});return <Float speed={1.3} rotationIntensity={.35} floatIntensity={.7}><mesh ref={ref}><icosahedronGeometry args={[1.3,4]}/><MeshDistortMaterial color="#d9ff4a" metalness={.7} roughness={.22} distort={.22} speed={1.5}/></mesh></Float>}
function Grid(){return <gridHelper args={[7,14,'#34342f','#34342f']} position={[0,-1.55,0]}/>}
export default function Scene(){return <div className="scene"><Canvas camera={{position:[0,0,4.4],fov:42}} dpr={[1,1.5]}><ambientLight intensity={1.1}/><directionalLight position={[3,4,5]} intensity={3}/><pointLight position={[-3,2,2]} intensity={10} color="#d9ff4a"/><Core/><Grid/><Sparkles count={80} scale={5} size={1.8} speed={.2}/></Canvas></div>}