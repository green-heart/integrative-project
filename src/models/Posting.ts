import Login from './Login';
import Theme from './Theme'

interface Posting {
    id: number,
    text: string,
    image: string,
    location: string,
    date: Date,
    theme?: Theme | null,
    user?: Login | null
}

export default Posting;