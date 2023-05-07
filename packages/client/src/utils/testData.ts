import { ItemType } from "./types";


function getEndDate(addHours: number) {
    const endDate = new Date()
    endDate.setHours(endDate.getHours() + addHours)
    return endDate
}

export const items: ItemType[] = [
    {
        id: '1234',
        name: 'Mouse',
        startDate: new Date(),
        endDate: getEndDate(2),
        description: 'A gaming mouse which is very good and works great is very fast',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
        currentPrice: 500 * 100
    },
    {
        id: '12345',
        name: 'Laptop',
        startDate: new Date(),
        endDate: getEndDate(1),
        description: 'A gaming laptop which is very good and works great is very fast',
        image: 'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        currentPrice: 500 * 100
    },
    {
        id: '32345',
        name: 'Graphics card',
        startDate: new Date(),
        endDate: getEndDate(3),
        description: 'A gaming graphics card which is very good and works great is very fast',
        image: 'https://images.unsplash.com/photo-1587134160474-cd3c9a60a34a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        currentPrice: 500 * 100
    },
    {
        id: '19345',
        name: 'Laptop',
        startDate: new Date(),
        endDate: getEndDate(1),
        description: 'A gaming laptop which is very good and works great is very fast',
        image: 'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        currentPrice: 500 * 100
    },
    {
        id: '1238',
        name: 'Mouse',
        startDate: new Date(),
        endDate: getEndDate(2),
        description: 'A gaming mouse which is very good and works great is very fast',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
        currentPrice: 500 * 100
    },
    {
        id: '30345',
        name: 'Graphics card',
        startDate: new Date(),
        endDate: getEndDate(3),
        description: 'A gaming graphics card which is very good and works great is very fast',
        image: 'https://images.unsplash.com/photo-1587134160474-cd3c9a60a34a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        currentPrice: 500 * 100
    },
    {
        id: '123888',
        name: 'Mouse',
        startDate: new Date(),
        endDate: getEndDate(2),
        description: 'A gaming mouse which is very good and works great is very fast',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
        currentPrice: 500 * 100
    },
];
