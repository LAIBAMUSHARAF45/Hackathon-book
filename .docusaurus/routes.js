import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ur/login',
    component: ComponentCreator('/ur/login', '49a'),
    exact: true
  },
  {
    path: '/ur/signup',
    component: ComponentCreator('/ur/signup', '699'),
    exact: true
  },
  {
    path: '/ur/docs',
    component: ComponentCreator('/ur/docs', 'b94'),
    routes: [
      {
        path: '/ur/docs',
        component: ComponentCreator('/ur/docs', '674'),
        routes: [
          {
            path: '/ur/docs',
            component: ComponentCreator('/ur/docs', 'ae5'),
            routes: [
              {
                path: '/ur/docs/intro',
                component: ComponentCreator('/ur/docs/intro', '8a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-1/chapter-1-core-concepts',
                component: ComponentCreator('/ur/docs/module-1/chapter-1-core-concepts', '125'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-1/chapter-2-rclpy-control',
                component: ComponentCreator('/ur/docs/module-1/chapter-2-rclpy-control', '966'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-1/chapter-3-urdf-fundamentals',
                component: ComponentCreator('/ur/docs/module-1/chapter-3-urdf-fundamentals', '31e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-1/chapter-4-joint-control-project',
                component: ComponentCreator('/ur/docs/module-1/chapter-4-joint-control-project', 'de7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-2/chapter-1-gazebo-physics',
                component: ComponentCreator('/ur/docs/module-2/chapter-1-gazebo-physics', 'b59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-2/chapter-2-unity-digital-twin',
                component: ComponentCreator('/ur/docs/module-2/chapter-2-unity-digital-twin', 'f27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-2/chapter-3-sensor-simulation',
                component: ComponentCreator('/ur/docs/module-2/chapter-3-sensor-simulation', '5ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-3-isaac/chapter-1-isaac-sim-fundamentals',
                component: ComponentCreator('/ur/docs/module-3-isaac/chapter-1-isaac-sim-fundamentals', '07b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-3-isaac/chapter-2-isaac-ros-vslam-perception',
                component: ComponentCreator('/ur/docs/module-3-isaac/chapter-2-isaac-ros-vslam-perception', '613'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-3-isaac/chapter-3-nav2-humanoid-planning',
                component: ComponentCreator('/ur/docs/module-3-isaac/chapter-3-nav2-humanoid-planning', '335'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-3-isaac/chapter-4-isaac-sim-ros-workflow',
                component: ComponentCreator('/ur/docs/module-3-isaac/chapter-4-isaac-sim-ros-workflow', '8cb'),
                exact: true
              },
              {
                path: '/ur/docs/module-4-vla/chapter-1-voice-to-action',
                component: ComponentCreator('/ur/docs/module-4-vla/chapter-1-voice-to-action', '47c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-4-vla/chapter-2-cognitive-planning',
                component: ComponentCreator('/ur/docs/module-4-vla/chapter-2-cognitive-planning', '7e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ur/docs/module-4-vla/chapter-3-capstone-overview',
                component: ComponentCreator('/ur/docs/module-4-vla/chapter-3-capstone-overview', '153'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ur/',
    component: ComponentCreator('/ur/', '3b1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
