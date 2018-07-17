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
                lastName: 'LastName 1',
                firstName: 'First Name 1',
                email: 'user1@example.com',
                image: '/images/user1.jpg',
                password: 'password1'
            },
            {
                id: 2,
                lastName: 'LastName 2',
                firstName: 'First Name 2',
                email: 'user1@example.com',
                image: '/images/user2.jpg',
                password: 'password2'
            },
            {
                id: 3,
                lastName: 'LastName 3',
                firstName: 'First Name 3',
                email: 'user1@example.com',
                image: '/images/user3.jpg',
                password: 'password3'
            }
        ];
        return { projects, users };
    }
}