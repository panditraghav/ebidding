import Container from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { ItemType } from "@/utils";
import { getItemsById } from "@/utils/api";
import { motion } from "framer-motion";
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemPage() {
    const [highestBid, setHighestBid] = useState<number>(0)
    const [newBid, setNewBid] = useState<number>(0)
    const [item, setItem] = useState<ItemType | undefined>()
    const { id } = useParams()
    useEffect(() => {
        async function getAndSetItem() {
            const item = await getItemsById({ id: id || '' })
            setItem(item)
            if (item) {
                setHighestBid(item.currentPrice)
            }
        }
        getAndSetItem()
    }, [])

    useEffect(() => {
        if (highestBid) {
            setNewBid(Math.round(highestBid + highestBid / 3))
        }
    }, [highestBid])

    if (!item) {
        return <Container>Not found..</Container>
    }

    return (
        <Container>
            <img src={item.image} alt={item.name} />
            <div className="my-4">
                <h1 className="text-3xl font-medium">{item.name}</h1>
                <p>{item.description}</p>
                <div className="flex justify-between items-center">
                    <div className="basis-2/3">
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            key={highestBid}
                        >
                            <span className="font-medium">Highest bid:- </span>
                            <span>
                                {highestBid / 100} Rs
                            </span>
                        </motion.div>
                    </div>
                    <div className="my-4 flex items-center">
                        <Button variant="link">
                            <MinusIcon />
                        </Button>
                        <Button onClick={() => setHighestBid(newBid)}>Bid {newBid / 100} Rs</Button>
                        <Button variant="link">
                            <PlusIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </Container >
    )
}