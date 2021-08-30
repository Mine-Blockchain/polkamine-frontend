
import { memo, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import clsx from 'clsx'

import { useDashboard } from 'contexts/dashboard-context'
import HomeHeader from './HomeHeader'
import TokenCard from './TokenCard'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: -2,
    backgroundColor: theme.palette.background.primary,
    '& canvas': {
      position: 'absolute',
      top: 0,
      zIndex: -1,
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 0)
    }
  },
  tokenContainer: {
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 0)
    }
  }
}));

const Home = () => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()

  const { tokens } = useDashboard()

  useEffect(() => {
    const container = document.getElementById("container");
    const width = container.clientWidth;
    const height = container.clientHeight;
    const aspect = width / height;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
    const mx = window.matchMedia("(min-width: 992px)");
    if (mx.matches) {
      camera.position.x = -80
      camera.position.y = 30
      camera.position.z = 450
    } else {
      camera.position.x = 0
      camera.position.y = 50
      camera.position.z = 650
    }

    const system = new THREE.Group(); // planetary system

    scene.add(
      new THREE.AmbientLight(0xFFFFFF, 0.2)
    );

    const light = new THREE.DirectionalLight(0xFFFFFF, 1.5);
    light.position.set(1500, 2500, 0);

    const light2 = new THREE.DirectionalLight(0xcdfc6d, 2.0);
    light2.position.set(-300, -200, 0);

    scene.add(light);
    scene.add(light2);

    const material = new THREE.MeshLambertMaterial({
      color: 0x3966a3
    });

    const planet = new THREE.Mesh(
      new THREE.IcosahedronGeometry(100, 3),
      material
    );

    for (let i = 0; i < planet.geometry.vertices.length; i++)
      planet.geometry.vertices[i].multiplyScalar(
        Math.random() * 0.05 + 0.95
      );

    planet.geometry.computeFlatVertexNormals();
    system.add(planet);

    const asteroids = new THREE.Group();

    for (let p = 0; p < Math.PI * 2; p = p + Math.random() * 0.15) {
      const asteroid = new THREE.Mesh(
        new THREE.IcosahedronGeometry(8, 0),
        material
      );

      const size = Math.random() * 0.5;
      for (let i = 0; i < asteroid.geometry.vertices.length; i++)
        asteroid.geometry.vertices[i].multiplyScalar(
          Math.random() * 0.5 + size
        );

      const rand = Math.random() * 60 - 30;
      asteroid.position.set(200 * Math.sin(p) + rand, rand, 200 * Math.cos(p) + rand);

      asteroid.geometry.computeFlatVertexNormals();
      asteroids.add(asteroid);
    }

    system.add(asteroids);

    system.rotation.x = 0.1;
    system.rotation.y = -.3;
    system.rotation.z = 0.3;

    scene.add(system);

    for (let i = 0; i < 10; i++) {
      const particles = new THREE.Points(
        new THREE.Geometry(),
        new THREE.PointsMaterial({
          size: Math.random() * 5
        })
      );
      for (let j = 0; j < 20; j++) {
        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * width * 1.1 - width * 1.1 / 2;
        vertex.y = Math.random() * height * 1.1 - height * 1.1 / 2;
        vertex.z = -500;
        particles.geometry.vertices.push(vertex);
        particles.material.color.setScalar(Math.random() * 0.4 + 0.2);
      }
      scene.add(particles);
    }

    function render() {
      requestAnimationFrame(render);

      planet.rotation.y += 0.001;
      planet.rotation.z -= 0.0005;

      asteroids.rotation.y += 0.003;

      renderer.render(scene, camera);
    }

    render();
  }, [])

  return (
    <main id='container' className={classes.root}>
      <div className={clsx(commonClasses.containerWidth, classes.container)}>
        <HomeHeader />
        <Grid container spacing={6} className={classes.tokenContainer}>
          {tokens.map((token) =>
            <Grid key={token.tokenName} item xs={12} sm={6} md={4}>
              <TokenCard token={token} />
            </Grid>
          )}
        </Grid>
      </div>
    </main>
  )
}

export default memo(Home)