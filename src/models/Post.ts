import Theme from './Theme'

interface Post{
    id: number,
    title: string,
    text: string,
    theme?: Theme | null
}

export default Post;