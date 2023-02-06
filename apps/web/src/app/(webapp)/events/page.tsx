import DisplayEvents from '@/components/DisplayEvents'

const fetchEvents = async (id: number) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    // throw new Error('Error loading comments')

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60,
        },
    }).then(res => res.json())
}

const events = [
    {
        id: 0,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 1,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 2,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 3,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 4,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 5,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 6,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 7,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 8,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 9,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 10,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
    {
        id: 11,
        owner: '0x0004',
        title: 'This is an event',
        target: '400',
        deadline: '5/12/2023',
        amountCollected: '50',
        image: 'https://mementodao.org/photo11.jpeg',
    },
]

export default function Events() {
    // const [isLoading, setIsLoading] = useState(false);
    // const [campaigns, setCampaigns] = useState([]);

    // const { address, contract, getCampaigns } = useStateContext();

    // const fetchCampaigns = async () => {
    //   setIsLoading(true);
    //   const data = await getCampaigns();
    //   setCampaigns(data);
    //   setIsLoading(false);
    // }

    // useEffect(() => {
    //   if(contract) fetchCampaigns();
    // }, [address, contract]);

    return <DisplayEvents title='All Events' isLoading={false} events={events} />
}
