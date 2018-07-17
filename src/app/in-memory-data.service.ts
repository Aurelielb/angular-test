import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const projects = [
            {
                id: 1,
                name: 'Projet 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                images: [{ title: 'lorem ipsum', src: '/images/project1-1.jpg' }]
            },
            {
                id: 2,
                name: 'Projet 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                images: [{ title: 'lorem ipsum', src: '/images/project2-1.jpg' }]
            },
            {
                id: 3,
                name: 'Projet 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                images: [{ title: 'lorem ipsum', src: '/images/project3-1.jpg' }]
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
                projectId: 1,
                userId: 1,
                timestamp: '1531844822603'
            }
        ]
        return { projects, users, donations };
    }
}