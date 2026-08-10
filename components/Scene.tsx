'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Wheel({position}:{position:[number,number,number]}){return <mesh position={position} rotation={[Math.PI/2,0,0]}><cylinderGeometry args={[.34,.34,.18,32]}/><meshStandardMaterial color="#171714" metalness={.75} roughness={.25}/></mesh>}
function Car(){const ref=useRef<THREE.Group>(null);useFrame((_,d)=>{if(ref.current){ref.current.rotation.y+=d*.16;ref.current.rotation.z=Math.sin(performance.now()*.001)*.025}});return <Float speed={1.1} rotationIntensity={.12} floatIntensity={.35}><group ref={ref} scale={1.15} rotation={[0,-.45,0]}>
<mesh position={[0,.25,0]} castShadow><boxGeometry args={[2.9,.55,1.25]}/><meshStandardMaterial color="#d9ff4a" metalness={.55} roughness={.22}/></mesh>
<mesh position={[.25,.7,0]} rotation={[0,0,0]} castShadow><boxGeometry args={[1.55,.55,1.05]}/><meshStandardMaterial color="#22221f" metalness={.5} roughness={.3}/></mesh>
<mesh position={[.28,.73,0]}><boxGeometry args={[1.15,.38,.98]}/><meshStandardMaterial color="#343a3a" metalness={.7} roughness={.12}/></mesh>
<mesh position={[-1.5,.34,0]}><boxGeometry args={[.08,.18,1.05]}/><meshStandardMaterial color="#d9ff4a" emissive="#d9ff4a" emissiveIntensity={2}/></mesh>
<Wheel position={[-.95,-.05,.68]}/><Wheel position={[.95,-.05,.68]}/><Wheel position={[-.95,-.05,-.68]}/><Wheel position={[.95,-.05,-.68]}/>
</group></Float>}
function Grid(){return <gridHelper args={[7,14,'#34342f','#34342f']} rotation={[0,0,0]} position={[0,-.65,0]}/>}
export default function Scene(){return <div className="scene"><Canvas camera={{position:[0,1.1,5],fov:38}} dpr={[1,1.5]}><ambientLight intensity={1}/><directionalLight position={[3,4,5]} intensity={4}/><pointLight position={[-3,1,2]} intensity={12} color="#d9ff4a"/><Car/><Grid/><Sparkles count={70} scale={5} size={1.7} speed={.2}/></Canvas></div>}