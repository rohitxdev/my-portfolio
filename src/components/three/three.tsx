import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

import styles from './three.module.scss';

export const Three = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const renderer = useMemo(() => new THREE.WebGLRenderer(), []);
	const scene = useMemo(() => new THREE.Scene(), []);
	const camera = useMemo(
		() =>
			new THREE.PerspectiveCamera(
				45,
				window.innerWidth / window.innerHeight,
				1,
				500,
			),
		[],
	);

	useEffect(() => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		if (containerRef.current) {
			containerRef.current.appendChild(renderer.domElement);
		}
		return () => {
			if (containerRef.current) {
				containerRef.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	useEffect(() => {
		camera.position.set(0, 0, 100);
		camera.lookAt(0, 0, 0);
		const material = new THREE.LineBasicMaterial({ color: 0xffffff });
		const points = [];
		points.push(new THREE.Vector3(-10, 0, 0));
		points.push(new THREE.Vector3(0, 10, 0));
		points.push(new THREE.Vector3(10, 0, 0));

		const geometry = new THREE.BufferGeometry().setFromPoints(points);
		const line = new THREE.Line(geometry, material);
		scene.add(line);
		renderer.render(scene, camera);

		function render(time: number) {
			time *= 0.001; // convert time to seconds

			line.rotation.x = time;
			// line.rotation.y = time;

			renderer.render(scene, camera);

			requestAnimationFrame(render);
		}
		requestAnimationFrame(render);
	}, []);
	return <div className={styles.three} ref={containerRef}></div>;
};
