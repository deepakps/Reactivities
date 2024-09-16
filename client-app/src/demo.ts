interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

const duck2: Duck = {
    name: 'duey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

duck1.makeSound('Qucaak!');
duck2.makeSound('fuck!');
duck1.name = '42'

export const duck = [duck1, duck2];