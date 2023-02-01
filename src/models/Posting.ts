import Theme from './Theme'
import User from './User';

interface Posting {
    id: number,
    text: string,
    image: string,
    location: string,
    date: Date,
    theme?: Theme | null,
    user?: User | null
}

export default Posting;