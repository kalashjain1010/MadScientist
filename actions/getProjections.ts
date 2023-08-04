import { db } from "@/firebase";
import { post } from "@/types";
import { collection, getDocs } from "firebase/firestore";

export async function getProjections() {
    const ref = collection(db, 'posts')
    const query = await getDocs(ref)

    const data: post[] = []
    query.forEach((post) => {
        data.push(post.data() as post)
    });
    return data
}