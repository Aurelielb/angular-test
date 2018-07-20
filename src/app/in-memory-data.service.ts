import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const projects = [
            {
                id: 1,
                name: 'Lorem ipsum dolor 1',
                logo: '/assets/logo-default.png',
                organisation: 'Organisation Lorem',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                    + ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
                    + ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
                    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
                    + ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                images: [
                    { title: 'lac', src: '/assets/projects/lake.jpg' },
                    { title: 'montagne', src: '/assets/projects/mountain.jpg' }
                ]
            },
            {
                id: 2,
                name: 'Lorem ipsum dolor 2',
                logo: '/assets/logo-default.png',
                organisation: 'Organisation Ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                    + ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
                    + ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
                    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
                    + ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                images: [
                    { title: 'rivière', src: '/assets/projects/river.jpg' },
                    { title: 'route dans les bois', src: '/assets/projects/woodland-road.jpg' }
                ]
            },
            {
                id: 3,
                name: 'Lorem ipsum dolor 3',
                logo: '/assets/logo-default.png',
                organisation: 'Organisation Dolor',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                    + ' ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
                    + ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'
                    + ' voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
                    + ' non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                images: [
                    { title: 'rivière', src: '/assets/projects/river.jpg' },
                    { title: 'lac', src: '/assets/projects/lake.jpg' },
                    { title: 'route dans les bois', src: '/assets/projects/woodland-road.jpg' }
                ]
            }
        ];
        const users = [
            {
                id: 1,
                lastName: 'Petit',
                firstName: 'Jean',
                email: 'user1@example.com',
                image: '/assets/pictures/beard-guy.svg',
                password: 'password1'
            },
            {
                id: 2,
                lastName: 'Dubois',
                firstName: 'Pauline',
                email: 'user1@example.com',
                image: '/assets/pictures/short-hair-girl.svg',
                password: 'password2'
            },
            {
                id: 3,
                lastName: 'Dupont',
                firstName: 'Ethan',
                email: 'user1@example.com',
                image: '/assets/pictures/old-man.svg',
                password: 'password3'
            }
        ];
        const donations = [
            {
                id: 1,
                projectId: 1,
                userId: 2,
                timestamp: '1531844822603'
            },
            {
                id: 2,
                projectId: 2,
                userId: 1,
                timestamp: '1531844822603'
            },
            {
                id: 3,
                projectId: 3,
                userId: 1,
                timestamp: '1531844822603'
            },
            {
                id: 4,
                projectId: 1,
                userId: 3,
                timestamp: '1531844822603'
            },
            {
                id: 5,
                projectId: 1,
                userId: 3,
                timestamp: '1531844822603'
            }
        ];
        const campaigns = [
            {
                id: 1,
                name: 'Campagne 1',
                mp4Src: '/assets/videos/les-nuls-chats-kwiskas.mp4',
                webmSrc: '/assets/videos/les-nuls-chats-kwiskas.webm',
                url: 'http://www.example1.com'
            },
            {
                id: 2,
                name: 'Campagne 2',
                mp4Src: '/assets/videos/les-nuls-chats-kwiskas.mp4',
                webmSrc: '/assets/videos/les-nuls-chats-kwiskas.webm',
                url: 'http://www.example2.com'
            },
            {
                id: 3,
                name: 'Campagne 3',
                mp4Src: '/assets/videos/les-nuls-chats-kwiskas.mp4',
                webmSrc: '/assets/videos/les-nuls-chats-kwiskas.webm',
                url: 'http://www.example3.com'
            }
        ];
        return { projects, users, donations, campaigns };
    }
}
