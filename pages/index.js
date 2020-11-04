import {useEffect, useState, useRef, useCallback} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Hero} from "../components/styles";
import {motion, useViewportScroll} from "framer-motion"
import * as THREE from 'three';
import {Canvas, extend, FogExp2, useFrame} from "react-three-fiber";
import Box from "../components/three/Box";
import Image from 'next/image'
import Particles from "../components/three/Particles";

export default function Home() {
    const {scrollYProgress, scrollY} = useViewportScroll()
    const [down, set] = useState(false)
    const mouse = useRef([0, 0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

    useEffect(() => {
        console.log(scrollY)
        console.log(scrollYProgress)
    }, [scrollY])

    return (
        <Canvas
            onMouseMove={onMouseMove}
            onMouseUp={() => set(false)}
            onMouseDown={() => set(true)}
            style={{width: '100vw', height: '100vh', backgroundImage: 'url("outrun.jpg")', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <ambientLight/>
            <pointLight position={[10, 10, 10]} />
            <fogExp2 attach="fog" args={['white', 50]} density={0.3}/>
            <Particles count={5000} mouse={mouse} />
            <Box position={[0, 1.2, 3]} scale={[1, 1, 1]} />
            <Box position={[-1.2, 0, 2]} scale={[1, 1, 1]}/>
            <Box position={[0, -1.2, -3]} scale={[1, 1, 1]} />
            <Box position={[0, -2.0, 0]} scale={[0.4, 0.4, 0.4]}/>
            <Box position={[0, -2.4, 0]} scale={[0.2, 0.2, 0.2]}/>
            <Box position={[1.2, 0, 2]} scale={[1, 1, 1]}/>
        </Canvas>
    )
}
